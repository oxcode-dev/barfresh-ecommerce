import { useState } from "react"
import { serverTimestamp } from 'firebase/firestore';
import { useCartDetail } from '../hooks/useCartDetail'
import { useFirebaseDB } from '../hooks/useFirebaseDB'
import { o_O } from "../helpers";
import { useRouter } from "next/navigation";
import { NotificationBar } from "./Notification";
import { useSelector } from "react-redux";
import { getUser } from "../store/slices/CartSlice";

const infoData = [
    'We accept Cash on Delivery payments.',
    'Kindly be at the given address to pick up.',
    'Kindly check the condition of your products on the delivery spot.',
    'Please Contact us for more information.'
]
export const CheckoutForm = ({totalAmount=0, shippingCost=0}) => {
    const user = useSelector(getUser) || ''

    const router = useRouter()
    const { carts, resetCarts, getProductDetails } = useCartDetail()
    const { addData } = useFirebaseDB()

    const [email, setEmail] = useState(user || '')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [notifyState, setNotifyState] = useState(false)
    const [notifyMessage, setNotifyMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const resetForm = () => {
        setAddress('')
        setEmail('')
        setPhone('')
        setCity('')
        setName('')
    }

    const submit = async(e) => {
        e.preventDefault();

        setIsLoading(true)
        const form = {
            email: email, name: name, phone: phone,
            city: city, address: address, shipping_cost: shippingCost,
            total_amount: totalAmount, status: 'ordered', created_at: serverTimestamp(),
            total: totalAmount + shippingCost,
        }

        let [error, data] = await o_O(addData('orders', form))
        if(error) return console.log('error: ', error)

        const promises = carts.map(async (item) => await addData('order_items', {
            quantity: item.quantity,
            product_id: item.product_id,
            order_id: data,
            created_at: serverTimestamp(),
            price: getProductDetails(item.product_id)?.price || 0 * item?.quantity || 0,
        }))
        Promise.all(promises)
            .then(results => {
                if(results && results.length > 0){
                    setNotifyMessage('Your order has been place!!!')
                    setNotifyState(true)

                    setIsLoading(false)
                    resetForm()

                    setTimeout(() => {
                        resetCarts()
                        router.push('/')
                    }, 5000)
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <>
            <div className="py-8">
                <h1 className="text-lg text-gray-700 font-semibold py-2">Shipping Information</h1>

                <form onSubmit={submit}>
                    <div className='my-5'>
                        <input 
                            type="email" required 
                            className="w-full bg-transparent py-1 px-3 border border-gray-300 rounded-lg h-10 text-sm focus:outline-none" 
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className='my-8 space-y-1.5'>
                        <input 
                            type="text" required 
                            className="w-full bg-transparent py-1 px-3 border border-gray-300 rounded-lg h-10 text-sm focus:outline-none" 
                            placeholder="Name" name="name"
                            onChange={e => setName(e.target.value)}
                        />
                        <input 
                            type="text" required 
                            className="w-full bg-transparent py-1 px-3 border border-gray-300 rounded-lg h-10 text-sm focus:outline-none" 
                            placeholder="Phone" name="phone"
                            onChange={e => setPhone(e.target.value)}
                        />
                        <input 
                            type="text" required 
                            className="w-full bg-transparent py-1 px-3 border border-gray-300 rounded-lg h-10 text-sm focus:outline-none" 
                            placeholder="City" name="city"
                            onChange={e => setCity(e.target.value)}
                        />
                        <div>
                            <textarea 
                                required rows={10} 
                                className="w-full bg-transparent py-1 px-3 border border-gray-300 rounded-lg h-16 text-sm focus:outline-none" 
                                placeholder="Address" name="address"
                                onChange={e => setAddress(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-500" role="alert">
                        <p className="font-medium">Important Notice</p>
                        <ul className="space-y-1.5 my-2">
                            {
                                infoData.map((option, key) => (
                                    <li key={key} className="text-xs list-decimal pl-2 list-inside">
                                        {option}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    
                    <div className='my-5'>
                        <button
                            disabled={isLoading} 
                            className="bg-green-700 h-12 w-full text-white rounded-lg disabled:bg-green-200 disabled:cursor-wait"
                        >
                            { isLoading ? 'Loading' : `Pay £ ${totalAmount + shippingCost}` }
                        </button>
                    </div>
                </form>

                <NotificationBar
                    active={notifyState}
                    onClose={() => setNotifyState(false)}
                    message={notifyMessage}
                />
            </div>
        </>
    )
}