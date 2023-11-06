import { useEffect } from 'react'
import Layout from '../../layout'
import { fetchProducts } from '../../store/slices/ProductsSlice'
import { useFirebaseDB } from '../../hooks/useFirebaseDB'
import { o_O } from '../../helpers'
import { useDispatch } from 'react-redux'
import StoresSection from '../../sections/Stores'
import { fetchCategories } from '../../store/slices/CategoriesSlice'

export default function Store() {
  const { getAllData } = useFirebaseDB()
  const dispatch = useDispatch()

  const queryProducts = async() => {
    let [error, data] = await o_O(getAllData('products'))
    if(error) return console.log(error)

    dispatch(fetchProducts(data))
  }

  const queryCategories = async() => {
    let [error, data] = await o_O(getAllData('categories'))
    if(error) return console.log(error)

    dispatch(fetchCategories(data))
  }

  useEffect(() => {
    queryProducts()
    queryCategories()
  }, [])

  return (
    <>
      <Layout>
        <div className='bg-white mx-4 md:mx-24 py-8'>
          <div className='flex flex-col items-center text-center space-x-4 space-y-8'>
            <h1 className='font-semibold text-3xl md:text-5xl text-gray-700 pt-4'>Barfresh Naturals</h1>
            <p className='sm:text-lg text-gray-500 px-4'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
              duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div> 

          <StoresSection />
        </div>
      </Layout>
    </>
  )
}
