'use client'
import { useEffect, useState } from "react";
import RootLayout from "../../layout";
import { useFirebaseDB } from "../../hooks/useFirebaseDB";
import { o_O } from "../../helpers";
import { OrdersTable } from "../../sections/orders";
import { EmptyOrder } from "../../components/EmptyState";
import { LoadingState } from "../../components/LoadingState";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getUser } from "../../store/slices/CartSlice";

export default function Orders() {
    const dispatch = useDispatch()
    const user = useSelector(getUser) || ''

    const [isClient, setIsClient] = useState(false)
    const [search, setSearch] = useState(user || '')
    const [isLoading, setIsLoading] = useState(false)
    const [orders, setOrders] = useState([])
    const { getDataWhereKeyValue } = useFirebaseDB()

    const searchOrders = (e) => {
        e.preventDefault();
        dispatch(addUser(search))
        getOrders()
    }
    const getOrders = async() => {
        setIsLoading(true)
        console.log(search)

        let [error, data] = await o_O(getDataWhereKeyValue('orders', 'email', search))

        if(error) {
            console.log(error)
        }
        else {
            setOrders(data)
        }
        setIsLoading(false)
    }
    useEffect(() => {
        setIsClient(true)
        getOrders()
    }, [isClient])
    return (
        <>
            <RootLayout>
                <div className='bg-white mx-4 sm:mx-12 md:mx-24 py-8'>
                    <div>
                        <h2 className="font-bold text-2xl sm:text-4xl pb-4">Orders</h2>
                        <p className="text-gray-500 text-sm">
                            You can view all your orders here by providing your email below.
                        </p>
                        <form onSubmit={e => searchOrders(e)} className="w-full flex sm:max-w-lg py-8">
                            <div className="w-2/3 sm:w-3/4 relative h-12 sm:h-16">
                                <input 
                                    onChange={e => setSearch(e.target.value)}
                                    type="email" required
                                    value={search}
                                    placeholder="Enter your email to search your orders" 
                                    className="w-full bg-transparent py-1 px-3 pl-10 sm:pl-12 border border-gray-700 rounded-lg h-full focus:outline-none"
                                />
                                <div className="absolute top-3 sm:top-4 left-2 sm:left-3 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
                                </div>
                            </div>
                            <div className="w-1/3 sm:w-1/4 relative h-12 sm:h-16 text-white">
                                <button
                                    disabled={isLoading} 
                                    type="submit" 
                                    className="ml-3 w-full bg-green-700 py-1 px-3 rounded-lg h-full focus:outline-none"
                                >{ isLoading ? 'Loading...' : 'Search' }</button>
                            </div>
                        </form>
                    </div>
                    { isClient &&
                        <div className="py-2 inline-block min-w-full">
                            { !isLoading && orders && orders.length > 0 
                                ? <OrdersTable orders={orders}  /> : null
                            }
                            { !isLoading && orders && orders.length === 0 ? <EmptyOrder /> : null }
                            { isLoading && <LoadingState /> }
                        </div>
                    }
                </div>
            </RootLayout>
        </>
    )
}