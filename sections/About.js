export const AboutHero = () => (
    <>
        <div className='px-4 md:px-20 py-8 sm:py-16 w-full'>
            <div className='flex flex-wrap justify-between items-center'>
                <div className='w-full sm:w-1/2 order-last md:order-first'>
                    <h1 className="text-2xl md:text-4xl font-semibold leading-8 my-4 mb-8 text-gray-800">Our Story</h1>
                    <div className="my-1.5 text-gray-600 sm:text-lg font-light sm:pr-4 space-y-4">
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
                        </p>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
                        </p>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 md:order-last order-first'>
                    <div className='sm:pl-8'>
                        <img src='./img/about_hero.png' />
                    </div>
                </div>
            </div>
        </div>
    </>
)


export const FounderHistory = () => (
    <>
        <div className='px-4 md:px-20 py-8 sm:py-16 w-full'>
            <div className='flex flex-wrap justify-between items-center'>
                <div className='w-full sm:w-1/2'>
                    <div className='pr-8'>
                        <img src='./img/founder.png' />
                    </div>
                </div>
                <div className='w-full sm:w-1/2'>
                    <h1 className="text-2xl md:text-4xl font-semibold leading-8 my-4 mb-8 text-gray-800">Founder</h1>
                    <div className="my-1.5 text-gray-600 sm:text-lg font-light space-y-4">
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
                        </p>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
)

const values = [
    '100% organic ingredients sourced from West Africa',
    'Completely handmade with utmost care by the mothers of Damongo, Ghana',
    'Stored in sustainable packaging that are FSC certified and reusable',
    'Maximum delivery time of 10 days for countries outside the UK, USA, and Canada'
]
export const PVCSection = () => (
    <>
        <div className='px-4 md:px-20 py-8 sm:py-16 w-full'>
            <h3 className='text-center text-2xl md:text-4xl font-semibold leading-8 my-4 mb-8 text-gray-800'>
                Product value chain
            </h3>
            <div className='flex flex-wrap justify-between items-center'>
                <div className='w-full sm:w-1/2'>
                    <div className='sm:px-6'>
                        <img src='/img/product_value_chain.png' />
                    </div>
                </div>
                <div className='w-full sm:w-1/2'>
                    <ul className='px-4 sm:px-12 md:px-16'>
                        {values.map((value, key) => (
                            <li key={key}>
                                <div className='inline-flex space-x-4 items-start py-3'>
                                    <div className='w-4 h-4 bg-green-700 rounded-full p-2 mt-1.5' />
                                    <div className='sm:text-lg text-gray-600'>
                                        {value}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
)
