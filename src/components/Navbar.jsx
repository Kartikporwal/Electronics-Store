import React from 'react'
import {Link} from "react-router-dom"
import {Home, ShoppingBag, Zap, History, ShoppingCart} from "lucide-react"
import { useSelector } from 'react-redux'

const Navbar = () => {

    const cartItems = useSelector((state) => state.cart.cartItems)

        const cartCount = cartItems.reduce(
          (total, item) => total + item.quantity,
           0
          )

      const historyItems = useSelector(
        (state) => state.history.historyItems
      )

  return (
     <nav className='bg-slate-950 text-white px-6 py-5 flex flex-wrap justify-between items-center gap-4'>
       <Link className='text-2xl font-bold flex items-center gap-2'>
         <Zap className='text-yellow-400'/>
         Electronics <span className='text-yellow-400'>Store</span>
       </Link>

       <div className='flex items-center gap-6 text-sm font-bold'>
         <Link to='/' className='flex gap-2 items-center hover:text-yellow-400'>
          <Home size={18}/>Home
         </Link>

         <Link to='/shop' className='flex gap-2 items-center hover:text-yellow-400'>
          <ShoppingBag size={18}/>Shop
         </Link>

         <Link to='/history' className='relative flex gap-2 items-center hover:text-yellow-400'>
          <History size={18}/>
            History
          <span className='bg-yellow-400 text-black text-xs rounded-full px-2'>
             {historyItems.length}
             </span>
          </Link>

         <Link to='/cart' className='relative hover:text-yellow-400'>
         <ShoppingCart size={24}/>
         <span className='absolute -top-3 -right-3 bg-yellow-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center'>
         {cartCount}
        </span>
      </Link>
       </div>
     </nav>
  )
}

export default Navbar

