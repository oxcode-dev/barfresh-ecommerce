import Link from "next/link"

const EmptyCart = () => {
    return (
        <>
            <div className="w-full py-12">
                <img 
                    className="w-full h-full sm:h-48 object-contain px-12" 
                    src="/img/empty_cart.svg"
                />
                <div className="w-full md:max-w-xl mx-auto my-2 md:my-8 flex flex-col justify-center">
                    <h2 className="my-3 text-center text-lg md:text-2xl">
                        Your cart is currently empty!
                    </h2>
                    <div className="text-center pb-5 pt-2 text-gray-500 text-sm">
                        <p>
                            You have no items in your shopping cart.
                        </p>
                        <p>
                            Let's go buy something!
                        </p>
                    </div>
                    <Link 
                        href="/store"
                        className="bg-green-700 h-12 p-2 text-white rounded-lg w-48 mx-auto inline-flex justify-center items-center"
                    >
                        Start shopping
                    </Link>
                </div>
            </div>
        </>
    )
}

export const EmptyOrder = () => {
    return (
        <>
            <div className="w-full py-12">
                <img 
                    className="w-full h-full sm:h-64 object-contain px-12" 
                    src="/img/empty-order.jpeg"
                />
                <div className="w-full md:max-w-xl mx-auto my-2 md:my-8 flex flex-col justify-center">
                    <h2 className="my-3 text-center text-lg md:text-2xl">
                        Your order is currently empty!
                    </h2>
                    <div className="text-center pb-5 pt-2 text-gray-500 text-sm">
                        <p>
                            You have nothing in your orders.
                        </p>
                        <p>
                            Let's go buy something!
                        </p>
                    </div>
                    <Link 
                        href="/store"
                        className="bg-green-700 h-12 p-2 text-white rounded-lg w-48 mx-auto inline-flex justify-center items-center"
                    >
                        Start shopping
                    </Link>
                </div>
            </div>
        </>
    )
}


const EmptyData = () => {
    return (
        <>
            <div className="w-full flex flex-col justify-center py-4 md:py-12 object-contain">
                <img 
                    className="w-auto h-28 sm:h-48 object-contain px-12" 
                    src="/img/no_data.svg"
                />
                <div className="w-full md:max-w-xl mx-auto my-2 md:my-8 flex flex-col justify-center">
                    <h2 className="sm:my-3 text-center text-lg md:text-2xl">
                        No Data Found!
                    </h2>
                    <div className="text-center pb-5 pt-2 text-gray-500 text-sm">
                        <p>
                            Whoops... Data is not available.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}


const EmptyState = ({ isCart=false }) => {
    return (
        <>
            { isCart ? <EmptyCart /> : <EmptyData /> }
        </>
    )
}
export default EmptyState