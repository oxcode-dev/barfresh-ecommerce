const Reviews = () => (
    <>
        <section 
            className="bg-no-repeat py-20 bg-cover w-full"
            style={{ backgroundImage: `url(./img/review_bg.png)`}}
        >
            <div className="w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto">
                <h2 className="text-white text-4xl leading-8 py-4 text-center">Reviews</h2>
                <div className="w-full relative py-4">
                    <div className="ml-2 absolute w-12 h-12 rounded-full bg-white p-2 top-1/3">
                        <a href="#" className="text-green-700 w-full h-full inline-flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10"><path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                    <div className="px-24">
                        <div className="bg-white py-6 sm:py-8 px-6 rounded-t-3xl rounded-br-3xl h-64 sm:h-56 flex flex-col justify-between">
                            <div className="text-sm sm:text-sm md:text-lg text-gray-500">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </div>
                            <div className="inline-flex items-center space-x-3">
                                <img 
                                    src="https://www.capitalfm.co.ke/lifestyle/files/2015/01/proud.jpg" 
                                    className="w-12 h-12 aspect-square rounded-full object-cover"
                                />
                                <p className="text-sm text-gray-500">James Milner</p>
                            </div>
                        </div>
                        <div className="flex space-x-3 justify-center my-6">
                            <div className="w-12 sm:w-20 h-4 rounded-full bg-white p-1"></div>
                            <div className="w-4 h-4 rounded-full bg-white p-1"></div>
                            <div className="w-4 h-4 rounded-full bg-white p-1"></div>
                            <div className="w-4 h-4 rounded-full bg-white p-1"></div>
                            <div className="w-4 h-4 rounded-full bg-white p-1"></div>
                        </div>
                    </div>
                    <div className="mr-2 absolute w-12 h-12 rounded-full bg-white p-2 right-0 top-1/3">
                        <a href="#" className="text-green-700 w-full h-full inline-flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>
            </div>
            
        </section>
    </>
)

export default Reviews