import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import History from './pages/History'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path="history" element={<History />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
