import Layout from '../layout'
import { ContactDetails, ContactForm } from '../sections/Contact'

export default function Contact() {
  return (
    <>
      <Layout>
        <div className='flex flex-wrap bg-white mx-4 sm:mx-8 md:mx-24 py-8 sm:py-20'>
          <div className='w-full sm:w-1/2'>
            <ContactForm />
          </div>
          <div className='w-full sm:w-1/2'>
            <ContactDetails />
          </div>
        </div>
      </Layout>
    </>
  )
}
