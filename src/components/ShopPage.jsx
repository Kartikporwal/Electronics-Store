import React from 'react'
import ProductCard from './ProductCard'

const ShopPage = () => {
  return (
    <div className='px-6 md:px-12 py-10'>
        <div className='mb-10'>
            <h1 className='text-4xl font-bold text-slate-900'>
                Explore Our Products
            </h1>

            <p className='text-gray-500 mt-3'>
                Discover the latest electronics at amazing prices.
            </p>
        </div>

        <div className='flex flex-col md:flex-row justify-between gap-5 mb-10'>

            <input type="text" placeholder='Search Products...'
            className='border rounded-lg px-5 py-3 outline-none w-full md:w-1/2' />

         <select className="border rounded-lg px-5 py-3">
          <option>All Categories</option>
          <option>Laptop</option>
          <option>Audio</option>
          <option>Camera</option>
          <option>Accessories</option>
        </select>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <ProductCard />
        </div>
    </div>
  )
}

export default ShopPage
