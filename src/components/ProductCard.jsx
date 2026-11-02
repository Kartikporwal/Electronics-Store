
import { Heart, Star, ShoppingCart } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import { addToHistory } from '../redux/slices/historySlice'

const ProductCard = ({ product }) => {

  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className='bg-white rounded-xl shadow-md border overflow-hidden hover:shadow-xl transition'>
          <div className='relative bg-gray-100 p-5'>
      <img
        src={product.image}
        className="w-full h-52 object-contain cursor-pointer"
         alt={product.name}
        onClick={() => dispatch(addToHistory(product))}
     />
        <span className='absolute top-4 left-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold'>
          SALE
       </span>
        <button className='absolute top-4 right-4 bg-white p-2 rounded-full shadow'>
          <Heart size={20} />
        </button>
      </div>
      <div className='p-5'>
        <p className='text-sm text-gray-500'>
          {product.category}
        </p>
       <h2
         onClick={() => dispatch(addToHistory(product))}
        className="text-xl font-bold text-slate-900 mt-2 cursor-pointer">
             {product.name}
         </h2>
        <div className='flex items-center gap-1 mt-2 text-yellow-500'>
          <Star size={16} />
          <span className='text-gray-600 text-sm'>
            {product.rating} Rating
          </span>
        </div>
        <div className='flex items-center gap-3 mt-4'>
          <span className='text-xl font-bold text-slate-900'>
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <del className="text-gray-400">
            ₹{product.oldPrice.toLocaleString('en-IN')}
          </del>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full mt-5 bg-slate-950 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-black transition"
        >
          <ShoppingCart size={19} />
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard

