import Link from "next/link"
import { useOrderDetail } from "../hooks/useOrderDetail"

export const OrdersTable = ({ orders }) => {
    return (
        <>
            <div className="overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-white border-b">
                        <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Order Date</th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Biller Name</th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Total</th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody className="border-b">
                        { orders.map((option, key) => ( 
                            <tr className="bg-white hover:bg-gray-50 cursor-pointer" key={key}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <Link className="block" href={`/orders/${option.id}`}>11/20/2023</Link>
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <Link className="block" href={`/orders/${option.id}`}>
                                        { option?.name || 'N/A' }
                                    </Link>
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <Link className="block" href={`/orders/${option.id}`}>
                                        £ { option?.total || 0 }
                                    </Link>
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <Link className="block" href={`/orders/${option.id}`}>
                                        { option?.status || 'pending'}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
} 

export const OrderItemsTable = ({ items, order }) => {
    const { getProductDetails, totalCartsPrice } = useOrderDetail()

    return (
        <>
            <div className="bg-gray-200 py-3 px-4">
                <p>Products</p>
            </div>
            <div className="w-full hidden sm:inline-block rounded-lg overflow-hidden">
                <table className="leading-normal w-full">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-center font-semibold text-gray-600 tracking-wider">
                                <h2 className="text-xl">Price</h2>
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-center font-semibold text-gray-600 tracking-wider">
                                <h2 className="text-xl">Quantity</h2>
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 text-center font-semibold text-gray-600 tracking-wider">
                                <h2 className="text-xl">Total</h2>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    { items.map((item, key) => (
                        <tr key={key}>
                            <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center space-x-4 sm:space-x-6">
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-16 sm:h-auto">
                                        <img className="w-full object-cover h-full rounded-lg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.2&amp;w=160&amp;h=160&amp;q=80" alt="" />
                                    </div>
                                    <div className="ml-3 flex flex-col">
                                        <a className="text-gray-700 whitespace-no-wrap text-sm ms:text-lg" href="/store/qhijYaI8qkPdxAiTf3cj">
                                            { getProductDetails(item.product_id)?.name || 'N/A' }
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-4 border-b border-gray-200 bg-white text-lg text-center">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    £ { item?.price || 0 }
                                </p>
                            </td>
                            <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm text-center">
                                <div className="inline-flex space-x-6">
                                    <p className="text-lg">{ item?.quantity }</p>
                                </div>
                            </td>
                            <td className="px-5 py-4 border-b border-gray-200 bg-white text-lg text-center">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    £ { item.quantity * item?.price }
                                </p>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="sm:hidden">
                <div className="flex items-start space-x-4 border-t py-4 px-2">
                    <div className="flex-shrink-0 w-16 sm:h-auto mt-1.5">
                        <img className="w-full object-cover h-full rounded-lg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.2&amp;w=160&amp;h=160&amp;q=80" alt="" />
                    </div>
                    <div className="ml-3 w-full relative">
                        <a className="text-gray-700 whitespace-no-wrap font-medium text-base" href="/store/qhijYaI8qkPdxAiTf3cj">Voluptatem ut dolore Soap</a>
                        <p className="text-gray-500 whitespace-no-wrap">£ 610</p>
                        <div className="space-x-2 flex items-center w-full">
                            <div className="flex space-x-3 items-center text-sm text-gray-500">
                                <span>qty: </span>
                                <span>1</span>
                            </div>
                        </div>
                        <div className="absolute bottom-1 right-0">
                            <p className="text-gray-900 whitespace-no-wrap font-semibold text-xl">£ 610</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end py-8">
                <div className="">
                    <div className="py-2 flex justify-end items-center space-x-4 text-gray-500">
                        <h6 className="font-medium text-sm">Subtotal</h6>
                        <h6 className="font-medium text-xl">£ { totalCartsPrice(items) }</h6>
                    </div>
                    <div className="py-2 flex justify-end items-center space-x-4 text-gray-500">
                        <h6 className="font-medium text-sm">Shipping cost</h6>
                        <h6 className="font-medium text-xl">£ {order?.shipping_cost || 0}</h6>
                    </div>
                    <div className="py-2 flex justify-end items-end space-x-3">
                        <h3 className="uppercase font-semibold text-lg">Total</h3>
                        <h1 className="uppercase font-bold text-4xl">£ {order?.total || 0}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}