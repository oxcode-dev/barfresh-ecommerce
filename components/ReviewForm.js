import { useState } from 'react'
import StarRating from './StarRating'
import { useFirebaseDB } from '../hooks/useFirebaseDB'
import { o_O } from '../helpers'
import { serverTimestamp } from 'firebase/firestore';
import { NotificationBar } from './Notification';

export const ReviewForm = ({ productId, setClose }) => {
    const [notifyState, setNotifyState] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [rate, setRate] = useState(0)
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')

    const { addData } = useFirebaseDB()

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        if(name && rate > 0) {
            setIsLoading(true)
            const formData = {
                name: name, comment: comment, rate: rate, product_id: productId, created_at: serverTimestamp()
            }
            // return console.table(formData)
            try {
                let [error, data] = await o_O(addData('reviews', formData))
                if(error) { 
                    setIsLoading(false)
                    return console.log(error)
                }
                setIsLoading(false)
                setName('')
                setComment('')
                setRate(0)
                setNotifyState(true)
                setTimeout(() => {
                    setClose(false)
                }, 5000)
            }
            catch (error) {
                console.error(error)
            }
        }
    }
    
    return (
        <>
            <form onSubmit={e => handleSubmit(e)}>
                <div className='my-5'>
                    <input 
                        type="text" required name='name' 
                        value={name} onChange={e => setName(e.target.value)}
                        className="w-full bg-transparent py-1 px-3 border border-gray-700 rounded-lg h-12 focus:outline-none" 
                        placeholder="Your Name"
                    />
                </div>
                <div className='my-5'>
                    <span className='text-sm text-gray-500'>Rate this product</span>
                    <div className='flex'>
                        <StarRating rating={rate} setRating={setRate} />
                    </div>
                </div>
                <div className='my-5'>
                    <textarea 
                        rows={6} 
                        className="w-full bg-transparent py-1 px-3 border border-gray-700 rounded-lg h-24 focus:outline-none" 
                        placeholder="Comment..."
                        value={comment} onChange={e => setComment(e.target.value)}
                    />
                </div>
                <div className='my-5'>
                    <button
                        disabled={isLoading} 
                        className="bg-green-700 h-12 w-full text-white rounded-lg disabled:bg-green-200 disabled:cursor-wait"
                    >
                        { isLoading ? 'Loading' : 'Send' }
                    </button>
                </div>
            </form>
            <NotificationBar
                active={notifyState}
                onClose={() => setNotifyState(false)}
            />
        </>
    )
}