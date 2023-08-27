import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import Faqs from './Faqs';

const benefits = [
    { title: "Safe payment", img: "/img/benefit_credit_card.png" },
    { title: "Fast shipping", img: "/img/benefit_delivery.png" },
    { title: "24/7 Online support", img: "/img/benefit_support.png" },
]
export const Hero = () => (
    <>
        <div className='px-20 py-6 w-full text-white' style={{ backgroundColor: '#008000'}}>
            <div className="w-full flex flex-wrap items-center">
                <div className="w-full sm:w-1/2">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-medium leading-7 my-2 mb-5">
                            Barfresh Naturals
                        </h2>
                        <div className="pl-2 border-l-2 border-white my-8">
                            <p className="pr-20 text-lg font-light text-gray-200">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                        <div className="flex space-x-2 text-lg">
                            <Link 
                                href="/store"
                                className="w-48 text-green-700 h-16 bg-white border-2 border-white rounded-lg inline-flex justify-center items-center space-x-2"
                            >
                                <span>Visit Store</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                            </Link>
                            <Link href="/about" className="flex justify-center items-center w-48 bg-transparent h-16 text-white rounded-lg border-2 border-white">
                                About us
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 flex justify-end">
                    <div className="py-0 px-12 slide_left">
                        <img src="/img/home_hero.png" />
                    </div>
                </div>
            </div>
        </div>
    </>
)

export const HomeAboutSection = () => (
    <>
        {/* <div className='glitch'></div> */}
        <div className='px-4 md:px-16 py-8 md:py-0 pt-6 w-full' style={{ background: '#F2F9F2' }}>
            <div className="w-full flex flex-wrap items-center">
                <div className="w-full sm:w-1/2 flex justify-between transition-transform duration-[0.8s] ease-[ease-in-out] translate-x-[0%]">
                    <div className="py-0">
                        <img src="/img/home_about.png" />
                    </div>
                </div>
                <div className="w-full sm:w-1/2">
                    <div className="pt-4 md:pt-0 md:pl-8">
                        <h2 className="text-4xl sm:text-5xl font-semibold leading-7 my-2 mb-5">
                            About us
                        </h2>
                        <div className="my-8 md:pr-10 text-lg text-gray-800">
                            <p className="">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis 
                                enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
                                duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                        <div className="flex space-x-2 text-lg">
                            <Link href="/about" className="w-48 text-white h-16 bg-green-700 border-2 border-white rounded-lg inline-flex justify-center items-center space-x-2">
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export const HomeBenefits = () => (
    <>
        <div className='px-4 md:px-20 py-8 sm:py-16 w-full'>
            <h2 className="text-2xl md:text-4xl font-semibold leading-7 my-2 mb-5 text-center py-6">
                What you stand to benefit
            </h2>
            <div className='flex flex-wrap'>
                {benefits.map((option, key) => (
                    <div className='w-full sm:w-1/3 p-3' key={key}>
                        <div className='flex flex-col items-center justify-center space-y-4 sm:space-y-8'>
                            <img src={option.img} className='sm:w-40 w-24 md:w-48' />
                            <p>{option.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
)

export const HomeProducts = () => (
    <>
        <div className='px-4 md:px-20 py-8 sm:py-16 w-full'>
            <h2 className="text-2xl md:text-4xl font-semibold leading-7 my-2 mb-5 text-center py-6">
                Products
            </h2>
            <div className='flex flex-wrap justify-center w-full md:max-w-5xl md:mx-auto'>
                {[...Array(2)].map((e, key) => (
                    <div className='w-full sm:w-1/2 p-3' key={key}>
                      <ProductCard />
                    </div>
                ))}
            </div>
            <div className="flex space-x-2 text-lg justify-center my-12">
                <Link href="/store" className="w-48 text-white h-16 bg-green-700 border-2 border-white rounded-lg inline-flex justify-center items-center space-x-2">
                    <span>Visit store</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                </Link>
            </div>
        </div>
    </>
)

export const FaqsSection = () => (
    <>
        <div className='px-4 md:px-20 py-8 sm:py-16 w-full'>
            <div className='py-8'>
                <h2 className='text-2xl md:text-4xl text-center font-semibold'>
                    Frequently asked questions.
                </h2>
            </div>
            <div className="w-full flex flex-wrap items-center py-6 md:py-12">
                <div className="w-full sm:w-2/3">
                    <div className="pr-0 sm:pr-12">
                        <Faqs />
                    </div>
                </div>
                <div className="w-full sm:w-1/3 sm:flex hidden sm:justify-between">
                    <div className="py-0">
                        <img src="/img/faqs.png" />
                    </div>
                </div>
            </div>
        </div>
    </>
)