import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCarts } from '../store/slices/CartSlice';
// import { useSelector } from 'react-redux'

const navigation = [
    { title: 'Home', link: '/', },
    { title: 'About Us', link: '/about', },
    { title: 'Store', link: '/store', },
    { title: 'Contact Us', link: '/contact', },
]

const extraNavs = [
    { 
        title: 'My Orders',
        link: '/orders',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"></path></svg>`
    },
    { 
        title: 'Shopping Cart',
        link: '/cart',
        icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>`
    },
]

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
