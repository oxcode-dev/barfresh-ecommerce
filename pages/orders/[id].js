'use client'

import { useEffect, useState } from "react";
import RootLayout from "../../layout";
import { isEmpty, o_O } from "../../helpers";
import { useFirebaseDB } from "../../hooks/useFirebaseDB";
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../store/slices/ProductsSlice'
import { OrderItemsTable } from "../../sections/orders";

export default function Orders() {
    const [isClient, setIsClient] = useState(false)
    const [order, setOrder] = useState({})
    const [orderItems, setOrderItems] = useState([])

    const dispatch = useDispatch()
    const { getDataWithId, getDataWhereKeyValue, getAllData } = useFirebaseDB()

    const getOrderId = () => {
        let location = window.location.pathname
        return location? location.slice(location.lastIndexOf('/') +1) : null
    }

    const queryOrder = async() => {
        let id = getOrderId()

        if(id){
            let [error, data] = await o_O(getDataWithId('orders', id))
            if(error) return console.log(error)

            setOrder(data)
        }
    }

    const queryOrderItems = async() => {
        let id = getOrderId()

        if(id){
            let [error, data] = await o_O(getDataWhereKeyValue('order_items', 'order_id', id))
            if(error) return console.log(error)

            setOrderItems(data)
        }
    }

    const queryProducts = async() => {
        let [error, data] = await o_O(getAllData('products'))
        if(error) return console.log(error)

        dispatch(fetchProducts(data))
    }

    useEffect(() => {
        setIsClient(true)

        if(isClient) {
            queryOrder()
            queryOrderItems()
            queryProducts()
        }
    })

    return (
        <>
            <RootLayout>
                <div className='bg-white mx-4 sm:mx-12 md:mx-24 py-8'>
                    <div>
                        <h2 className="font-bold text-2xl sm:text-4xl pb-4">Order</h2>
                        <p className="text-gray-500 text-sm hidden">
                            You can view all your orders here by providing your email below.
                        </p>
                    </div>

                    {
                        isClient && !isEmpty(order) ?
                        <div>
                            <div className="my-8">
                                <div className="bg-gray-200 py-3 px-4">
                                    <p>Order Summary</p>
                                </div>
                                <div>
                                    <dl className="py-2 px-4 space-y-3">
                                        <div className="flex space-x-4">
                                            <dt className="w-1/4 sm:w-24">Date</dt>
                                            <dd className="text-gray-500 w-3/4 sm:w-auto">23/12/2023</dd>
                                        </div>
                                        <div className="flex space-x-4">
                                            <dt className="w-1/4 sm:w-24">Status</dt>
                                            <dd className="text-gray-500 w-3/4 sm:w-auto">{ order?.status || 'N/A' }</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>

                            <div className="my-8">
                                <div className="bg-gray-200 py-3 px-4">
                                    <p>Buyer Information</p>
                                </div>
                                <div>
                                    <dl className="py-2 px-4 space-y-3">
                                        <div className="flex space-x-4">
                                            <dt className="w-1/4 sm:w-24">Name</dt>
                                            <dd className="text-gray-500 w-3/4 sm:w-auto">{order?.name || 'N/A'}</dd>
                                        </div>
                                        <div className="flex space-x-4">
                                            <dt className="w-1/4 sm:w-24">Email</dt>
                                            <dd className="text-gray-500 w-3/4 sm:w-auto">{order?.email || 'N/A'}</dd>
                                        </div>
                                        <div className="flex space-x-4">
                                            <dt className="w-1/4 sm:w-24">Phone</dt>
                                            <dd className="text-gray-500 w-3/4 sm:w-auto">{order?.phone || 'N/A'}</dd>
                                        </div>
                                        <div className="flex space-x-4">
                                            <dt className="w-1/4 sm:w-24">Address</dt>
                                            <dd className="text-gray-500 w-3/4 sm:w-auto">{order?.address || 'N/A'}</dd>
                                        </div>
                                        <div className="flex space-x-4">
                                            <dt className="w-1/4 sm:w-24">City</dt>
                                            <dd className="text-gray-500 w-3/4 sm:w-auto">{order?.city || 'N/A'}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>

                            <div className="my-8">
                                <OrderItemsTable items={orderItems} order={order} />
                            </div>
                        </div> : null
                    }
                </div>
            </RootLayout>
        </> 
    )
}
