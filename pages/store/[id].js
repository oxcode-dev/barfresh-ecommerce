'use client'
import { isEmpty, o_O } from '../../helpers'
import { useFirebaseDB } from '../../hooks/useFirebaseDB'
import Layout from '../../layout'
import { ProductDescription, ProductDetails, ProductImagesView, ProductReviews } from '../../sections/Product'
import { usePathname } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'

export default function Store() {
    const params = usePathname()
    const [isClient, setIsClient] = useState(false)
    const [productId, setProductId] = useState(null)
    const [product, setProduct] = useState({})
    const [productReviews, setProductReviews] = useState([])
    
    const { getDataWithId, getDataWhereKeyValue } = useFirebaseDB()

    const queryProductDetails = async() => {
        let location = window.location.pathname
        setProductId(location? location.slice(location.lastIndexOf('/') +1) : null)

        if(productId){
            let [error, data] = await o_O(getDataWithId('products', productId))
            if(error) return console.log(error)
    
            setProduct(data)
        }
    }

    const getProductReviews = async() => {
        let location = window.location.pathname
        setProductId(location? location.slice(location.lastIndexOf('/') +1) : null)

        if(productId){
            let [error, data] = await o_O(getDataWhereKeyValue('reviews', 'product_id', productId))
            if(error) return console.log(error)
    
            setProductReviews(data)
            // console.log(data)
        }
    } 

    useEffect(() => {
        setIsClient(true)

        if(isClient) {
            queryProductDetails()
            getProductReviews()
        }
    })
    
    return (
        <>
            <Layout>
                <Suspense fallback={false}>
                    {
                        isClient && !isEmpty(product) &&
                        <div className='px-4 md:px-20 py-16 w-full'>
                            <div className='w-full flex flex-wrap'>
                                <div className='w-full sm:w-3/5'>
                                    <div className='sm:pr-12'>
                                        <ProductImagesView product={product} />
                                    </div>
                                </div>
                                <div className='w-full sm:w-2/5'>
                                    <ProductDetails product={product} />
                                </div>
                            </div>
                            <div>
                                <ProductDescription product={product} />
                            </div>
                            <div>
                                <ProductReviews reviews={productReviews} product={product} />
                            </div>
                        </div>
                    }
                </Suspense>
            </Layout>
        </>
    )
}