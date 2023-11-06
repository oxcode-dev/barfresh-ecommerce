'use client'
import { Suspense } from "react"

const Faqs = ({ faqs }) => {
    
    return (
        <>  
        {faqs.length > 0 &&            
            <div className="m-2 space-y-6" suppressHydrationWarning={true}>
                { faqs.map((option, key) => (
                    <div
                        className="group flex flex-col gap-2 rounded-lg bg-gray-100 p-5 text-gray-700"
                        key={key} tabIndex={key}
                    >
                        <p className="flex cursor-pointer items-center justify-between group-focus:mb-8">
                            <span className="font-medium">
                                <Suspense fallback={null}>
                                    { option?.question || 'N/A' }
                                </Suspense>
                            </span>
                            {/* <span className="h-2 w-3 transition-all duration-500 group-focus:-rotate-0 -rotate-90"> */}
                            <span className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                </svg>
                            </span>
                        </p>
                        <p
                            className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                        >
                            <span className="text-gray-500">
                                {/* { key +1 || 'N/A' } */}
                                <Suspense fallback={null}>
                                    { option?.answer || 'N/A' }
                                </Suspense>
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        }
        </>
    )
}

export default Faqs