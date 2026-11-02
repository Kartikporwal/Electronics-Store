import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import History from './pages/History'

const App = () => {

  const products = [
      {
      id: 1,
      name: "Laptop",
      category: "Laptop",
      price: 55999,
      oldPrice: 64999,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
      id: 2,
      name: "Wireless Headphones",
      category: "Audio",
      price: 4999,
      oldPrice: 6999,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
      id: 3,
      name: "Smart Watch",
      category: "Accessories",
      price: 2999,
      oldPrice: 3999,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
      id: 4,
      name: "Digital Camera",
      category: "Camera",
      price: 25999,
      oldPrice: 29999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
      id: 5,
      name: "Wireless Mouse",
      category: "Accessories",
      price: 999,
      oldPrice: 1499,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
    },
    {
      id: 6,
      name: "Smartphone",
      category: "Mobile",
      price: 34999,
      oldPrice: 39999,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    }
  ]

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/shop' element={<Shop products={products} />} />
        <Route path='/history' element={<History />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
