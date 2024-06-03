import Link from 'next/link';
import { helpfulLinks, legalInfoLinks, paymentIcons } from '../data/index'

const Footer = () => (
    <>
        <div className="w-full px-2 sm:px-4 md:px-20 py-8">

	        <div className="py-4 bg-white sm:py-6 w-full">
		        <div className="md:flex md:justify-between w-full">
                    <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 md:gap-6 md:grid-cols-4 w-full">
                        <div className="mb-6 md:mb-0 flex flex-col sm:items-center sm:justify-center">
                            <Link href="/" className="flex sm:items-center">
                                <img src="/logo.png" className="w-24 md:w-32" alt="FlowBite Logo" />
                            </Link>
                            <p className='tracking-wider sm:text-center text-sm text-gray-500 px-2'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit of met sint. Velit of dsaa
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-8 font-semibold text-gray-900 sm:text-xl">
                                Helpful links
                            </h3>
                            <ul className='text-sm sm:text-base xl:text-lg font-light'>
                                { 
                                    helpfulLinks.map((link, key) => (
                                        <li className="mb-4 sm:mb-6" key={key}>
                                            <Link href={link.link} className="text-gray-600 hover:underline">
                                                { link.title }
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-8 font-semibold text-gray-900 sm:text-xl">
                                Legal Information
                            </h3>
                            <ul className='text-sm sm:text-base xl:text-lg font-light'>
                                { 
                                    legalInfoLinks.map((link, key) => (
                                        <li className="mb-4 sm:mb-6" key={key}>
                                            <Link href={link.link} className="text-gray-600 hover:underline">
                                                { link.title }
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-8 font-semibold text-gray-900 sm:text-xl">
                                Accepted payment
                            </h3>
                            <div className='flex items-center flex-wrap'>
                                {
                                    paymentIcons.map((image, key) => (
                                        <img className='w-10 h-10 mx-1 aspect-video object-contain bg-blend-color-burn' src={image} key={key} />
                                    ))
                                }
                            </div>
                        </div>
			        </div>
		        </div>
            </div>
		    <hr className="my-6 border-gray-300 sm:mx-auto max-w-5xl lg:my-8" />
            <div className='pb-8'>
                <p className='text-center text-gray-500'>
                    &copy; 2022 Traycees Food Fashion Limited.
                </p>
            </div>
        </div>
    </>
)

export default Footer