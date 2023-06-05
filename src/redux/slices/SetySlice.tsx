import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SetsType } from '../../types/types'
import { productsApi } from '../../api/api'
export type sortListType = {
  [key:string]: string
}
export interface initialStateType {
  sety: SetsType[] | []
  sortValues: sortListType,
  activeSortIndex: number
}
const initialState: initialStateType = {
  sety: [],
  sortValues: {
      rating: "Популярності",
      price: "Ціною",
      name: "Алфавітом"
  },
  activeSortIndex: 0
}
export const fetchSets = createAsyncThunk(
  'sety/fetch',
  async (sort: string = '') => {
    const response = await productsApi.getSets(sort)
    return response
  }
)
export const setySlice = createSlice({
  name: "Sety",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.sety = action.payload
    },
    setIndexSort: (state, action) => {
      state.activeSortIndex = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchSets.pending, (state, action) => {

      })
    builder.addCase(
      fetchSets.fulfilled, (state, action) => {
        state.sety = action.payload
      })
    builder.addCase(
      fetchSets.rejected, (state, action) => {
        alert('Вибачте, щось пішло не так')
      })
  }
})

export const { setProducts, setIndexSort } = setySlice.actions

export default setySlice.reducer