const Faqs = () => {
    return (
        <>                
            <div className="m-2 space-y-6">
                { [...Array(5)].map((option, key) => (
                    <div
                        className="group flex flex-col gap-2 rounded-lg bg-gray-100 p-5 text-gray-700"
                        tabIndex={key} key={key}
                    >
                        <div className="flex cursor-pointer items-center justify-between group-focus:mb-8">
                            <span className="font-medium">
                                { `HTML ${key + 1}`}
                            </span>
                            {/* <span className="h-2 w-3 transition-all duration-500 group-focus:-rotate-0 -rotate-90"> */}
                            <span className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                            </span>
                        </div>
                        <div
                            className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                        >
                            <p className="text-gray-500">
                                { key + 1} 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Faqs