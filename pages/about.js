import Layout from '../layout'
import { AboutHero, FounderHistory, PVCSection } from '../sections/About'
import Reviews from '../sections/Reviews'


export default function About() {
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
