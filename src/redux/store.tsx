import { configureStore } from '@reduxjs/toolkit'
import setySlice from './slices/SetySlice'
export const store = configureStore({
  reducer: {
    sety: setySlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch