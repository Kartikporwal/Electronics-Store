import React from 'react'
import {Link} from "react-router-dom"
import {Home, ShoppingBag, Zap,History, ShoppingCart} from "lucide-react"


const Navbar = () => {
  return (
     <nav className='bg-slate-950 text-white px-6 py-5 flex flex-wrap justify-between items-center gap-4'>
       <Link className='text-2xl font-bold flex items-center gap-2'>
         <Zap className='text-yellow-400'/>
         Electronics <span className='text-yellow-400'>Store</span>
       </Link>

       <div className='flex items-center gap-6 text-sm'>
         <Link to='/' className='flex gap-2 items-center hover:text-yellow-400'>
          <Home size={18}/>Home
         </Link>

         <Link to='/shop' className='flex gap-2 items-center hover:text-yellow-400'>
          <ShoppingBag size={18}/>Shop
         </Link>

         <Link to='/history' className='flex gap-2 items-center hover:text-yellow-400'>
          <History size={18}/>History
         </Link>

         <Link to='/cart' className='relative hover:text-yellow-400'>
          <ShoppingCart size={24}/>
         </Link>

       </div>
     </nav>
  )
}

export default Navbar

