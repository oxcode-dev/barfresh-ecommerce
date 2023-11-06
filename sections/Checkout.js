'use client'
import Link from "next/link"
import CheckoutCart from "../components/CheckoutCart"
import { CheckoutForm } from "../components/CheckoutForm"
import { useCartDetail } from '../hooks/useCartDetail'

export const CheckoutSection = () => {
    const { isClient, totalAmount, shippingCost } = useCartDetail()

    return (
        <>
            <div className="flex h-full absolute w-full">
                {
                    isClient && 
                    <div className="flex flex-wrap w-full">
                        <div className="flex flex-col w-full sm:w-1/2 bg-gray-100 py-10 px-4 sm:px-20">
                            <div className="lg:pl-12">
                                <div>
                                    <Link href="/">
                                        <img src="/logo.png" className="w-32 h-20 aspect-auto object-contain -ml-8" />
                                    </Link>
                                </div>
                                <CheckoutCart />
                            </div>
                        </div>

                        <div className="flex flex-col w-full sm:w-1/2 bg-white py-10 px-4 md:px-20">
                            <div className="lg:pr-12 lg:mt-10">
                                <CheckoutForm 
                                    totalAmount={totalAmount}
                                    shippingCost={shippingCost}
                                />
                            </div>
                        </div>
                    </div>
                }
                
            </div>
        </>
    )
}
