import Link from "next/link"
import { useCartDetail } from '../hooks/useCartDetail'

const CheckoutCart = () => {
    const { carts, totalAmount, shippingCost, getProductDetails } = useCartDetail()

    return (
        <>
            <div className="w-full py-8">
                <Link href="/" className="text-gray-500 text-xs inline-flex items-center pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                    <span>continue shopping</span>
                </Link>
                <h1 className="text-xl font-semibold py-2">Order Summary</h1>

                <div className="mt-6">
                    <dl>
                        {carts.map((cart, key) => (
                            <div key={key} className="flex justify-between space-x-2 items-center py-2">
                                <div className="flex space-x-4 items-center">
                                    <img
                                        className="rounded-lg w-10 h-10 object-cover" 
                                        src={getProductDetails(cart.product_id).image || '/img/no-product-image.png' } 
                                        alt={getProductDetails(cart.product_id).name || 'Product Name'}
                                    />
                                    <div>
                                        <p className="text-sm font-medium">
                                            { getProductDetails(cart.product_id).name || 'N/A' }
                                        </p>
                                        <p className="text-xs font-light text-gray-400">Qty: {cart.quantity || 0}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-right">
                                        £ { cart.quantity * getProductDetails(cart.product_id).price || 0 }
                                    </p>
                                    <p className="text-xs font-light text-gray-400 text-right">
                                        £ { getProductDetails(cart.product_id).price || 0 }/unit
                                    </p>
                                </div>
                            </div>
                        ))}
                    </dl>
                    <dl className="pl-12 pt-4">
                        <div className="flex justify-between items-center py-1">
                           <dt className="text-xs font-medium text-gray-700">Subtotal</dt> 
                           <dd className="text-base font-medium">£{totalAmount}</dd> 
                        </div>
                        <div className="flex justify-between items-center border-y py-2">
                            <dt className="flex flex-col text-xs font-light text-gray-500">
                                <span>Shipping</span>
                                <span>Ground shipping (3-5 days)</span>
                            </dt>
                            <dd className="text-sm font-light text-gray-500">
                                £{shippingCost}
                            </dd>
                        </div>
                        <div className="flex justify-between items-center py-1">
                           <dt className="text-sm font-medium text-gray-700">Total due</dt> 
                           <dd className="text-lg font-medium">£{ totalAmount + shippingCost}</dd> 
                        </div>
                    </dl>
                </div>

            </div>
        </>
    )
}

export default CheckoutCart