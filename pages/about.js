import { useEffect } from 'react'
import Layout from '../layout'
import { AboutHero, FounderHistory, PVCSection } from '../sections/About'
import Reviews from '../sections/Reviews'
import { useDispatch } from 'react-redux'
import { fetchReviews } from '../store/slices/ReviewsSlice'
import { useFirebaseDB } from '../hooks/useFirebaseDB'
import { o_O } from '../helpers'

export default function About() {
  const { getAllData } = useFirebaseDB()
  const dispatch = useDispatch()

  const queryReviews = async() => {
    let [error, data] = await o_O(getAllData('reviews'))
    if(error) return console.log(error)

    dispatch(fetchReviews(data))
  }

  useEffect(() => {
    queryReviews()
  }, [])

  return (
    <>
      <Layout>
        <AboutHero />
        <FounderHistory />
        <PVCSection />
        <Reviews />
      </Layout>
    </>
  )
}
