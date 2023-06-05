import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SetsType } from '../../types/types'
import { productsApi } from '../../api/api'

export interface initialStateType {
  sety: SetsType[] | []
}
const initialState: initialStateType = {
  sety: []
}
export const fetchSets = createAsyncThunk(
  'sety/fetch',
  async () => {
    const response = await productsApi.getSets()
    return response 
  }
)
export const setySlice = createSlice({
  name: "Sety",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.sety = action.payload
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
        console.log('Errror');

      })
  }
})

export const { setProducts } = setySlice.actions

export default setySlice.reducer