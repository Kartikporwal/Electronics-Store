import React from 'react'
import ShopPage from '../components/ShopPage'

const Shop = ({products}) => {
   console.log(products);
  return (
    <div>
      <ShopPage products={products} />
    </div>
  )
}

export default Shop
