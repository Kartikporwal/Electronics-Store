
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  historyItems: []
}

const historySlice = createSlice({
  name: 'history',
  initialState,

  reducers: {
    addToHistory: (state, action) => {

      const product = action.payload
      state.historyItems = state.historyItems.filter(
        (item) => item.id !== product.id
      )

      state.historyItems.unshift(product)

    },

    removeFromHistory: (state, action) => {
      state.historyItems = state.historyItems.filter(
        (item) => item.id !== action.payload
      )

    },

    clearHistory: (state) => {
      state.historyItems = []
    }
  }
})

export const {
  addToHistory,
  removeFromHistory,
  clearHistory
} = historySlice.actions

export default historySlice.reducer
