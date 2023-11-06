'use client'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getProducts } from '../store/slices/ProductsSlice'
import ProductCard from '../components/ProductCard'
import { getCategories } from '../store/slices/CategoriesSlice'
import EmptyState from '../components/EmptyState'
import { NotificationBar } from '../components/Notification'

const StoresSection = () => {
  const [allProducts, setAllProducts] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')
  const [isClient, setIsClient] = useState(false)
  const [notifyState, setNotifyState] = useState(false)
  const [notifyMessage, setNotifyMessage] = useState('')

  const products = useSelector(getProducts) || []
  const categories = useSelector(getCategories) || []

  const handleSearchProducts = () => {
    if(filter && search) {
        let filtered = products.filter(n => n.category_id === filter)
        let data = filtered.filter(n => {
            return n.name.toLowerCase().includes(search.toLowerCase())
        });
        return setAllProducts(data)
    }
    if(filter) {
        let filtered = products.filter(n => n.category_id === filter)
        return setAllProducts(filtered)
    }
    if(search) {
      let data = products.filter(n => {
        return n.name.toLowerCase().includes(search.toLowerCase())
      });
      return setAllProducts(data)
    }

    return setAllProducts(products)
  }

  useEffect(() => {
    handleSearchProducts()
  }, [search, filter])

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <div>
        <div>
          <div>
            <div className='w-full sm:max-w-lg mx-auto'>
              <div className='my-8 relative h-16 mt-20'>
                <input 
                  type="text" required placeholder='Search' 
                  onChange={e => setSearch(e.target.value)}
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
                  {
                    isClient && 
                      <div>
                        <div className='hidden md:flex md:flex-col py-4 text-gray-500'>
                          <div className='flex justify-between items-center py-2'>
                            <label className='w-full'>
                              <input 
                                onChange={() => setFilter("")} type="radio" 
                                value="" className="peer hidden" name="category" checked={filter === ''}
                              />
                                  
                              <div className="hover:bg-gray-50 flex items-center justify-between px-2 w-full py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-green-600">
                                  <h2 className="font-medium text-gray-700 text-sm xl:text-base">
                                      All
                                  </h2>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-green-600 invisible group-[.peer:checked+&]:visible">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                              </div>
                            </label>
                          </div>
                          {
                            categories.map((category, key) => (
                              <div key={key} className='flex justify-between items-center py-2'>
                                <label className='w-full'>
                                  <input 
                                    onChange={() => setFilter(category.id)} type="radio" 
                                    value={category.id} className="peer hidden" name="category" 
                                  />
                                        
                                  <div className="hover:bg-gray-50 flex items-center justify-between px-2 w-full py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-green-600">
                                    <h2 className="font-medium text-gray-700 text-sm xl:text-base">
                                      { category.name || 'N/A' }
                                    </h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-green-600 invisible group-[.peer:checked+&]:visible">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    </div>
                                  </label>
                                </div>
                            ))
                          }
                        </div>
                        <div className='flex md:hidden'>
                          <select
                            className="w-full bg-transparent py-1 px-3 border border-gray-700 rounded-lg h-12 focus:outline-none" 
                            onChange={e => setFilter(e.target.value)}
                            value={filter}
                          >
                            <option value="">All</option>
                            { categories.map((category, key) => (
                              <option 
                                key={key} value={category.id}
                              >
                                { category.name || 'N/A' }
                              </option>
                            )) }
                          </select>
                        </div>
                      </div>
                  }
                </div>
              </div>
              <div className='w-full md:w-4/5'>
                {
                  isClient && 
                    <div className='flex flex-wrap'>
                      { allProducts.map((option, key) => (
                        <div key={key} className='w-full sm:w-1/2 md:w-1/3 p-3'>
                          <ProductCard 
                            setAlert={setNotifyState}
                            setMessage={setNotifyMessage}
                            product={option}
                          />
                        </div>
                      ))}
                      { allProducts && allProducts.length === 0 && <EmptyState />}

                      <NotificationBar
                        active={notifyState}
                        onClose={() => setNotifyState(false)}
                        message={notifyMessage}
                      />
                    </div>
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StoresSection