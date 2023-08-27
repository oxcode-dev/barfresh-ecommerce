import ProductCard from '../../components/ProductCard'
import Layout from '../../layout'

export default function Store() {
  return (
    <>
      <Layout>
        <div className='bg-white mx-24 py-8'>
          <div className='flex flex-col items-center text-center space-x-4 space-y-8'>
            <h1 className='font-semibold text-5xl text-gray-700 pt-4'>Barfresh Naturals</h1>
            <p className='text-lg text-gray-500 px-4'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
              duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div>
            <div className='w-full sm:max-w-lg mx-auto'>
              <div className='my-8 relative h-16 mt-20'>
                <input 
                  type="text" required placeholder='Search' 
                  className="w-full bg-transparent py-1 px-3 pl-12 border border-gray-700 rounded-lg h-full focus:outline-none" 
                />
                <div className='absolute top-4 left-3 text-gray-400'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap py-4'>
              <div className='w-full md:w-1/5'>
                <div className='pr-6'>
                  <h3 className='mb-2 text-xl font-medium tracking-tight text-gray-700'>Category</h3>
                  <div className='py-4 text-gray-500'>
                    <div className='flex justify-between items-center py-3'>
                      <p>Shea Butter</p>
                      <input type="checkbox" className="checkbox w-5 h-5 " />
                    </div>
                    <div className='flex justify-between items-center py-3'>
                      <p>Black Soap</p>
                      <input type="checkbox" className="checkbox w-5 h-5 " />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-4/5'>
                <div className='flex flex-wrap'>
                  {[...Array(15)].map((e, key) => (
                    <div key={key} className='w-full sm:w-1/2 md:w-1/3 p-3'>
                      <ProductCard />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
