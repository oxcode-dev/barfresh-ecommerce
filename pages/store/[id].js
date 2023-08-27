import ProductCard from '../../components/ProductCard'
import Layout from '../../layout'
import { ProductDescription, ProductDetails, ProductImagesView, ProductReviews } from '../../sections/Product'

export default function Store() {
    return (
        <>
            <Layout>
                <div className='px-20 py-16 w-full'>
                    <div className='w-full flex flex-wrap'>
                        <div className='w-full sm:w-3/5'>
                            <div className='pr-12'>
                                <ProductImagesView />
                            </div>
                        </div>
                        <div className='w-full sm:w-2/5'>
                            <ProductDetails />
                        </div>
                    </div>
                    <div>
                        <ProductDescription />
                    </div>
                    <div>
                        <ProductReviews />
                    </div>
                </div>
            </Layout>
        </>
    )
}