'use client'
import { useState, useEffect } from "react"
import { useSelector } from 'react-redux';
import { selectReviews } from '../store/slices/ReviewsSlice';

const Reviews = () => { 
    const reviews = useSelector(selectReviews) || []
    const data = reviews.slice(0, 5)
    
    const [active, setActive] = useState(data[0])
    const [nextReview, setNextReview] = useState(data[1])
    const [prevReview, setPrevReview] = useState(data[data.length - 1])
    const [isClient, setIsClient] = useState(false)

    const handleActiveReview = (review, e=null) => {
        e ? e.preventDefault() : null;
        setActive(review)
        let index = data.findIndex(n => n.id === review.id)
        setNextReview(index >= data.length - 1 ? data[0] : data[index + 1])
        setPrevReview(index === 0 ? data[data.length - 1] : data[index - 1])
    }

    useEffect(() => { 
        const interval = setInterval(() => { 
            handleActiveReview(nextReview)
        }, 8000); 
  
        return () => clearInterval(interval); 
    }, [nextReview]); 

    useEffect(() => {
        setIsClient(true)
    }, [])

    return(
        <>
            { isClient &&
            <section 
                className="bg-no-repeat py-20 bg-cover w-full"
                style={{ backgroundImage: `url(./img/review_bg.png)`}}
            >
                <div className="w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto">
                    <h2 className="text-white text-4xl leading-8 py-4 text-center">Reviews</h2>
                    { reviews && reviews.length > 0 ? 
                        <div className={`w-full relative py-4`}>
                            <div className="mr-2 hidden sm:flex  absolute w-12 h-12 rounded-full bg-white p-2 left-0 top-1/3 hover:bg-transparent hover:text-white hover:border hover:border-white text-green-700">
                                <a 
                                    href="#" onClick={event => handleActiveReview(prevReview, event)}
                                    className="w-full h-full inline-flex items-center justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10"><path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" /></svg>
                                </a>
                            </div>
                            <div className="px-4 md:px-24">
                                <div className="bg-white py-6 sm:py-8 px-4 sm:px-6 rounded-t-3xl rounded-br-3xl h-64 sm:h-56 flex flex-col justify-between">
                                    <div className="text-sm sm:text-sm md:text-lg text-gray-500">
                                        { active?.comment || 'N/A' }
                                    </div>
                                    <div className="inline-flex items-center space-x-3">
                                        <img 
                                            src="https://www.capitalfm.co.ke/lifestyle/files/2015/01/proud.jpg" 
                                            className="w-12 h-12 aspect-square rounded-full object-cover"
                                        />
                                        <p className="text-sm text-gray-500">
                                            { active?.name || 'N/A' }
                                        </p>
                                    </div>
                                </div>
                                <div className="flex space-x-3 justify-center my-6">
                                    {
                                        data.map((option, key) => (
                                            <a 
                                                onClick={event => handleActiveReview(option, event)}
                                                key={key} href="#"
                                                className={`${option.id === active?.id ? 'w-12 sm:w-20' : 'w-4'} h-4 rounded-full bg-white p-1`}
                                            ></a>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="mr-2 hidden sm:flex absolute w-12 h-12 rounded-full bg-white p-2 right-0 top-1/3 hover:bg-transparent hover:text-white hover:border hover:border-white text-green-700">
                                <a 
                                    href="#" onClick={event => handleActiveReview(nextReview, event)}
                                    className="w-full h-full inline-flex items-center justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
                                </a>
                            </div>
                        </div>
                        : null
                    }
                </div>
                
            </section>
            }
        </>
    )
}

export default Reviews