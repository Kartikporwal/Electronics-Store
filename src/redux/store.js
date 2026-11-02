
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import historyReducer from './slices/historySlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    history: historyReducer
  }
})

export default store
