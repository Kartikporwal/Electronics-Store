import React from 'react'
import ProductCard from './ProductCard'

const ShopPage = ({products}) => {

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

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'> 
           {products.map((product) => {
       return (
      <ProductCard
        key={product.id}
        product={product}
      />
      )
   })}
      </div>
       </div>
  )
}

export default ShopPage
