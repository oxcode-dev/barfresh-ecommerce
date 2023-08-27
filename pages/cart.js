import Layout from '../layout'
import { CartTable } from '../sections/Cart'

export default function Cart() {
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
