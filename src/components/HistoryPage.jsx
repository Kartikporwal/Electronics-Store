import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import {History as HistoryIcon, ShoppingCart, Trash2, ShoppingBag} from 'lucide-react'

import {
  removeFromHistory,
  clearHistory
} from '../redux/slices/historySlice'

import { addToCart } from '../redux/slices/cartSlice'

const HistoryPage = () => {

  const dispatch = useDispatch()

  const historyItems = useSelector(
    (state) => state.history.historyItems
  )

  return (
    <div className='min-h-screen bg-gray-50 px-6 md:px-12 py-10'>
      <div className='flex flex-col sm:flex-row justify-between gap-5 mb-10'>
        <div>
          <h1 className='text-4xl font-bold text-slate-950 flex items-center gap-3'>
            <HistoryIcon size={35} />
            Recently Viewed
          </h1>
          <p className='text-gray-500 mt-3'>
            Explore the products you have recently viewed.
          </p>
        </div>
        {historyItems.length > 0 && (
          <button
            onClick={() => dispatch(clearHistory())}
            className='flex items-center justify-center gap-2 bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600 transition h-fit'
          >
            <Trash2 size={18} />
            Clear History
          </button>
        )}
      </div>
      {historyItems.length === 0 ? (
        <div className='bg-white rounded-xl shadow p-10 text-center'>
          <ShoppingBag
            size={60}
            className='mx-auto text-gray-400 mb-5'
          />
          <h2 className='text-2xl font-bold text-slate-900'>
            No Browsing History
          </h2>
          <p className='text-gray-500 mt-3'>
            You haven't viewed any products yet.
          </p>
          <Link
            to="/shop"
            className='inline-flex items-center gap-2 mt-6 bg-slate-950 text-white px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition'
          >
            <ShoppingBag size={18} />
            Explore Products
          </Link>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {historyItems.map((product) => (
            <div
              key={product.id}
              className='bg-white rounded-xl shadow-md border overflow-hidden hover:shadow-xl transition'
            >
              <div className='bg-gray-100 p-5 relative'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-52 object-contain'
                />
                <span className='absolute top-4 left-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold'>
                  VIEWED
                </span>
              </div>
              <div className='p-5'>
                <p className='text-sm text-gray-500'>
                  {product.category}
                </p>
                <h2 className='text-xl font-bold text-slate-900 mt-2'>
                  {product.name}
                </h2>
                <div className='flex items-center gap-3 mt-4'>
                  <span className='text-xl font-bold text-slate-950'>
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <del className='text-gray-400'>
                    ₹{product.oldPrice.toLocaleString('en-IN')}
                  </del>
                </div>
                <div className='flex gap-3 mt-5'>
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className='flex-1 bg-slate-950 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-black transition'
                  >
                    <ShoppingCart size={18} />
                    Add To Cart
                  </button>
                  <button
                    onClick={() => dispatch(removeFromHistory(product.id))}
                    className='bg-red-100 text-red-500 p-3 rounded-lg hover:bg-red-500 hover:text-white transition'
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HistoryPage

