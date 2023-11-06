import Layout from '../layout'
import { FaqsSection, Hero, HomeAboutSection, HomeBenefits, HomeProducts } from '../sections/Home'
import Reviews from '../sections/Reviews'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchProducts, getProducts } from '../store/slices/ProductsSlice'
import { fetchFaqs } from '../store/slices/FaqsSlice'
import { fetchReviews } from '../store/slices/ReviewsSlice'
import { fetchProducts } from '../store/slices/ProductsSlice'
import { useFirebaseDB } from '../hooks/useFirebaseDB'
import { o_O } from '../helpers'
import EmptyState from '../components/EmptyState'

export default function Home() {
  const { getAllData } = useFirebaseDB()
  const dispatch = useDispatch()

  const queryFaqs = async() => {
    let [error, data] = await o_O(getAllData('faqs'))
    if(error) return console.log(error)

    dispatch(fetchFaqs(data))
  }

  const queryReviews = async() => {
    let [error, data] = await o_O(getAllData('reviews'))
    if(error) return console.log(error)

    dispatch(fetchReviews(data))
  }

  const queryProducts = async() => {
    let [error, data] = await o_O(getAllData('products'))
    if(error) return console.log(error)

    dispatch(fetchProducts(data))
  }

  useEffect(() => {
    queryFaqs()
    queryReviews()
    queryProducts()
  }, [])
  return (
    <>
      <Layout>
        <Hero />
        <HomeAboutSection />
        <HomeBenefits />
        <HomeProducts />
        <Reviews />
        <FaqsSection />
      </Layout>
    </>
  )
}
