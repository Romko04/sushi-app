import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ProductsType } from '../../types/types'
import { getProducts } from '../../api/api'
export type sortListType = {
  [key:string]: string
}
export interface initialStateType {
  products: ProductsType[] | []
  sortValues: sortListType,
  activeSortIndex: number
}
const initialState: initialStateType = {
  products: [],
  sortValues: {
      rating: "Популярності",
      price: "Ціною",
      asc: "Алфавітом"
  },
  activeSortIndex: 0
}
export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async ({product, sort}:{product:string,sort: string}) => {
    const response = await getProducts(product,sort)
    return response
  }
)
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setIndexSort: (state, action) => {
      state.activeSortIndex = action.payload
    },
    deleteIndexSort: (state) => {
      state.activeSortIndex = 0
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.pending, (state, action) => {
        state.products = []
      })
    builder.addCase(
      fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload
      })
    builder.addCase(
      fetchProducts.rejected, (state, action) => {
        alert('Вибачте, щось пішло не так')
      })
  }
})

export const { setProducts, setIndexSort,deleteIndexSort } = productsSlice.actions

export default productsSlice.reducer