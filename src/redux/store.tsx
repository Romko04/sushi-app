import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/ProductsSlice'
import BasketSlice from './slices/BasketSlice'
export const store = configureStore({
  reducer: {
    products: productSlice,
    basket: BasketSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch