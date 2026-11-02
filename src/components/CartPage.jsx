import { ShoppingBag, ArrowLeft, Minus, Plus, Trash2} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from '../redux/slices/cartSlice'

const CartPage = () => {

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className='min-h-screen bg-gray-50 px-6 md:px-12 py-10'>
      <h1 className='text-4xl font-bold text-slate-950 mb-3'>
        Shopping Cart
      </h1>
      <p className='text-gray-500 mb-10'>
        Review your products before checkout.
      </p>
      {cartItems.length === 0 ? (
        <div className='bg-white rounded-xl shadow p-10 text-center'>
          <ShoppingBag
            size={60}
            className='mx-auto text-gray-400 mb-5'
          />
          <h2 className="text-2xl font-bold text-slate-900">
            Your Cart is Empty
          </h2>
          <p className="text-gray-500 mt-3">
            Looks like you haven't added any products yet.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 mt-6 bg-slate-950 text-white px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
        </div>

      ) : (
        <div className='grid lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2 space-y-5'>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className='bg-white rounded-xl shadow p-5 flex flex-col sm:flex-row items-center gap-6'
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-28 h-28 object-contain bg-gray-100 rounded-lg'
                />
                  <div className='flex-1 text-center sm:text-left'>
                  <h2 className='text-xl font-bold text-slate-900'>
                    {item.name}
                  </h2>
                  <p className="text-gray-500 mt-2">
                    ₹{item.price.toLocaleString('en-IN')}
                  </p>
                  <div className='flex items-center justify-center sm:justify-start gap-4 mt-4'>
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      disabled={item.quantity === 1}
                      className='bg-gray-200 p-2 rounded-lg hover:bg-yellow-400 disabled:opacity-40'
                    >
                      <Minus size={17} />
                    </button>
                   <span className="font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className='bg-gray-200 p-2 rounded-lg hover:bg-yellow-400'
                    >
                      <Plus size={17} />
                    </button>
                  </div>
                </div>
                <div className='text-center'>
                  <p className='font-bold text-lg text-slate-950'>
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </p>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className='bg-red-100 text-red-500 p-3 rounded-lg hover:bg-red-500 hover:text-white transition mt-4'
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='bg-white rounded-xl shadow p-6 h-fit'>
            <h2 className="text-2xl font-bold text-slate-950 mb-6">
              Order Summary
            </h2>
            <div className='flex justify-between mb-4 text-gray-600'>
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>
            <div className='flex justify-between mb-4 text-gray-600'>
              <span>Subtotal</span>
              <span>₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            <div className='flex justify-between mb-4 text-gray-600'>
              <span>Delivery</span>
              <span className='text-green-600'>Free</span>
            </div>

            <hr className='my-5' />
            <div className='flex justify-between text-xl font-bold text-slate-950'>
              <span>Total</span>
              <span>₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>

            <button
              className='w-full bg-yellow-400 mt-7 text-black py-3 rounded-lg font-bold hover:bg-yellow-300 transition'
            >
              Proceed to Checkout
            </button>

            <Link
              to="/shop"
              className="block text-center mt-5 text-slate-600 hover:text-yellow-500"
            >
              Continue Shopping
            </Link>

          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage
