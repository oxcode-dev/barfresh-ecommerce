// import { useEffect } from "react"

 export const NotificationBar = ({ active, message, onClose,  }) => {
    return (
        <>
            <div className={
                    `fixed z-[500] bottom-4 right-2 transition-transform duration-[0.8s] ease-[ease-in-out] 
                    ${active ? 'translate-y-[-10%]' : 'translate-y-[130%]'}`
                }>
                <div
                    className="relative block w-full max-w-sm rounded-lg bg-green-500 px-4 py-2 text-white"
                >
                    <div className="absolute top-4 left-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mt-px h-6 w-6">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <div className="ml-8 mr-12">
                        <h5 className="block text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                            Success
                        </h5>
                        <p className="mt-2 block text-xs font-normal leading-relaxed text-white antialiased">
                            { message || 'Success!!!' }
                        </p>
                    </div>
                    <div
                        className="absolute top-3 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
                    >
                        <div onClick={() => onClose(false) } role="button" className="w-max rounded-lg p-1">
                            <svg xmlns="http://www.w3.org/2000/svg"  className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
 }