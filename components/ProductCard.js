import Link from 'next/link';
import { useCartDetail } from '../hooks/useCartDetail';

const ProductCard = ({ product, setAlert, setMessage }) => {
    const { handleAddCart} = useCartDetail()

    return (
        <>
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow product-card">
                <Link href={`/store/${product.id || null}`}>
                    <img 
                        className="rounded-t-lg h-40 object-cover w-full" 
                        src={product?.image || '/img/no-product-image.png'} 
                        alt={product?.title || 'Product Image'}
                    />
                </Link>
                <div href="#">
                    <div className="p-5">
                        <Link href={`/store/${product.id}`}>
                            <p className="mb-2 text-lg font-medium tracking-tight truncate line-clamp-1 text-gray-700">
                                { product?.name || 'N/A' }
                            </p>
                        </Link>
                        <p className="mb-3 font-normal text-gray-500 text-xs line-clamp-2">
                            { product?.description || 'N/A' }
                        </p>
                        <div className="flex space-x-2 hidden">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((e, key) => (
                                    <svg key={key} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                                ))}
                            </div>
                            <p className="text-gray-600 text-xs hidden">(7)</p>
                        </div>
                        <div className="flex space-x-2 items-center justify-between mt-2">
                            <p className="text-green-700 text-xl">£ {product.price || 0}</p>
                            <a 
                                href="#" onClick={e => handleAddCart(product.id, e, setAlert, setMessage)}
                                className="cart-btn space-x-1 items-center px-2 py-2 text-xs xl:text-sm font-medium text-center shadow border border-green-600 bg-white rounded text-green-600 focus:outline-none"
                            >
                                <span>Add to cart</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard