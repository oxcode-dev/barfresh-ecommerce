import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCarts } from '../store/slices/CartSlice';
import { navigationList as navigation, extraNavsList as extraNavs}  from '../data'

const Header = () => {
    const carts = useSelector(getCarts) || []
    const { pathname } = useRouter()
    const [active, setActive] = useState(false)
    const [totalAmount, setTotalAmount] = useState(0)

    const totalCartsQuantity = () => {
        let amount = carts.reduce((acc = {}, item = {}) => {
            acc.total = parseFloat((acc.total + item.quantity))
            return acc;
        },  { total: 0 })

        setTotalAmount(amount.total)
    }

    useEffect(() => {
        totalCartsQuantity()
    })

    return (
        <>
            <nav className="fixed bg-white w-full flex justify-between items-center mx-auto px-2 sm:px-12 z-50 h-24 shadow shadow-green-50">
                <div className="inline-flex text-gray-600">
                    <Link href="/">
                        <img src="/logo.png" className="w-32 h-20 aspect-auto object-contain" />
                    </Link>
                </div>

                <div className='sm:px-12 flex h-full items-center'>
                    <div className='hidden md:flex'>
                        { navigation.map((nav, key) => (
                            <Link
                                className={`${pathname === nav.link ? 'text-green-700 border-green-600 border-b-4' : 'text-slate-700 border-0'} px-4 md:px-8 py-8 text-md hover:text-green-600`}
                                key={key} 
                                href={nav.link}
                            >
                                {nav.title}
                            </Link>
                        ))}
                    </div>
                    <div className='flex md:hidden'>
                        <div 
                            className={
                                    `bg-white h-screen fixed top-0 w-full left-0 transition-transform duration-[0.8s] ease-[ease-in-out]
                                    ${active ? "translate-x-[0%]" : "translate-x-[-100%]"}`
                                }
                            >
                            <div className='absolute right-4 top-8'>
                                <a className='w-6' onClick={() => setActive(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                </a>
                            </div>
                            <div className='w-full mx-auto h-full'>
                                <div className='flex flex-col mx-auto items-center justify-center h-full'>
                                    { navigation.map((nav, key) => (
                                        <Link
                                            className={`${pathname === nav.link ? 'text-green-700 border-green-600 border-b-4' : 'text-slate-700 border-0'} px-4 py-6 text-md hover:text-green-600`}
                                            key={key} 
                                            href={nav.link}
                                        >
                                            {nav.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        {
                            extraNavs.map((nav, key) => (
                                <Link 
                                    title={nav.title}
                                    className='w-6 relative' 
                                    key={key} href={nav.link} 
                                >
                                    { nav.link === '/cart' && totalAmount > 0 ? 
                                        <span 
                                            className='w-4 h-4 text-xs text-white absolute right-0 -top-2 bg-red-600 p-1 rounded-full items-center justify-center inline-flex'
                                        >
                                            {totalAmount}
                                        </span> : null
                                    }
                                    
                                    <span dangerouslySetInnerHTML={{ __html: nav.icon }}></span>
                                </Link>
                            ))
                        }
                        <a className='w-6 flex md:hidden' onClick={() => setActive(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
