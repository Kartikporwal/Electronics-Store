import { Heart, Star, ShoppingCart } from 'lucide-react'
import React from 'react'

const ProductCard = () => {
  return (
    <div className='bg-white rounded-xl shadow-md border overflow-hidden hover:shadow-xl transition'>
      
      <div className='relative bg-gray-100 p-5'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnthsDIvOiH6qvlTJ4HPrjCKzfuJOLFPh0AfQrsZVzvcSvLaY9-B2_P0c&s=10"
        className="w-full h-52 object-contain" alt="" />

        <span className='absolute top-4 left-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold'>
            SALE
        </span>

        <button className='absolute top-4 right-4 bg-white p-2 rounded-full shadow'>
            <Heart size={20} />
        </button>
      </div>

      <div className='p-5'>
        <p className='text-sm text-gray-500'>
            Electronics
        </p>
         <h2 className="text-xl font-bold text-slate-900 mt-2">
          Wireless Headphones
        </h2>
        <div className='flex items-center gap-1 mt-2 text-yellow-500'>
            <Star size={16}/>
            <span className='text-gray-600 text-sm'>4.8 Rating</span>
        </div>
        <div className='flex items-center gap-3 mt-4'>
            <span className='text-xl font-bold text-slate-900'>
                ₹4,999
            </span>
             <del className="text-gray-400">
            ₹6,999
          </del>
        </div>
         <button className="w-full mt-5 bg-slate-950 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-black transition">
          <ShoppingCart size={19} />
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
