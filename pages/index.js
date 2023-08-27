import Layout from '../layout'
import { FaqsSection, Hero, HomeAboutSection, HomeBenefits, HomeProducts } from '../sections/Home'
import Reviews from '../sections/Reviews'


export default function Home() {
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
