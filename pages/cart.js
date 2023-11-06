import Layout from '../layout'
import { CartTable } from '../sections/Cart'
import { fetchProducts } from '../store/slices/ProductsSlice'
import { useFirebaseDB } from '../hooks/useFirebaseDB'
import { o_O } from '../helpers'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function Cart() {
  const { getAllData } = useFirebaseDB()
  const dispatch = useDispatch()

  const queryProducts = async() => {
    let [error, data] = await o_O(getAllData('products'))
    if(error) return console.log(error)

    dispatch(fetchProducts(data))
  }

  useEffect(() => {
    queryProducts()
  }, [])

  return (
    <>
      <Layout>
        <div className='bg-white mx-4 sm:mx-12 md:mx-24 py-8'>
          <h2 className='font-bold text-2xl sm:text-4xl'>Your Cart</h2>
          <CartTable />
        </div>
      </Layout>
    </>
  )
}
