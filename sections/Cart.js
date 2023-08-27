export const CartTable = () => (
    <>
        <div className='w-full flex'>
            <div className="w-full -mx-4 sm:-mx-8 px-2 sm:px-8 py-4 overflow-hidden">
                <div className="w-full hidden sm:inline-block rounded-lg overflow-hidden">
                    <table className="leading-normal w-full">
                        <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">        
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-center font-semibold text-gray-600 tracking-wider"
                                >
                                    <h2 className='text-xl'>Price</h2>
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-center font-semibold text-gray-600 tracking-wider"
                                >
                                    <h2 className='text-xl'>Quantity</h2>
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-center font-semibold text-gray-600 tracking-wider"
                                >
                                    <h2 className='text-xl'>Total</h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(3)].map((e, i) => (
                                <tr key={i}>
                                    <td className="px-5 py-5 sm:py-10 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center space-x-4 sm:space-x-6">
                                            <div className="flex-shrink-0 w-10 h-10 sm:w-16 sm:h-auto">
                                                <img className="w-full object-cover h-full rounded-lg"
                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-700 whitespace-no-wrap text-sm ms:text-lg">
                                                    Shea Butter
                                                </p>
                                                <a href='#' className='inline-flex text-red-600 space-x-2 py-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                                                    <span>Remove</span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-10 border-b border-gray-200 bg-white text-lg text-center">
                                        <p className="text-gray-900 whitespace-no-wrap">£ 100</p>
                                    </td>
                                    <td className="px-5 py-10 border-b border-gray-200 bg-white text-sm text-center">
                                        <div className='inline-flex space-x-6'>
                                            <a href='#' className='bg-green-700 text-white rounded-full p-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" /></svg>
                                            </a>
                                            <p className='text-lg'>1</p>
                                            <a href='#' className='bg-green-700 text-white rounded-full p-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                                            </a>
                                        </div>
                                    </td>
                                    <td className="px-5 py-10 border-b border-gray-200 bg-white text-lg text-center">
                                        <p className="text-gray-900 whitespace-no-wrap">£ 100</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="sm:hidden">
                    {[...Array(3)].map((e, key) => (                     
                    <div className="flex items-start space-x-4 border-t py-4 px-2" key={key}>
                        <div className="flex-shrink-0 w-16 sm:h-auto">
                            <img className="w-full object-cover h-full rounded-lg"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt="" />
                        </div>
                        <div className="ml-3 w-full relative">
                            <h3 className="text-gray-700 whitespace-no-wrap font-medium text-lg">
                                Shea Butter
                            </h3>
                            <p className="text-gray-600 whitespace-no-wrap">£ 100</p>

                            <div className="space-x-2 flex items-center w-full">
                                <div className='flex space-x-3 items-center'>
                                    <a href='#' className='bg-green-700 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" /></svg>
                                    </a>
                                    <p className='text-lg'>1</p>
                                    <a href='#' className='bg-green-700 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                                    </a>
                                </div>
                                <a href='#' className='inline-flex text-red-600 space-x-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                                </a>
                            </div>
                            <div className="absolute bottom-1 right-0">
                                <p className="text-gray-900 whitespace-no-wrap font-semibold text-lg">£ 100</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className='flex justify-end py-8'>
                    <div className=''>
                        <div className='py-4 flex justify-end items-end space-x-3'>
                            <h3 className='uppercase font-semibold text-lg'>Subtotal</h3>
                            <h1 className='uppercase font-bold text-4xl'>£ 300</h1>
                        </div>
                        <div className='flex flex-col items-end'>
                            <p className='text-gray-500 text-sm'>Shipping & taxes calculated at checkout</p>
                            <div className='my-4 w-full sm:w-96'>
                                <button className="bg-green-700 h-16 w-full text-white rounded-lg">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)