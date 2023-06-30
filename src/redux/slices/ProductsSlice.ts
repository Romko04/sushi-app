import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ProductsType } from '../../types/types'
import { getProducts } from '../../api/api'
export type sortListType = {
  [key:string]: string
}
export interface initialStateType {
  products: ProductsType[] | []
  sortValues: sortListType
  activeSortIndex: number
  typeProduct:string
  typeModal:'registration' | 'login'
  city: string
  isOpenModal:boolean
}
const initialState: initialStateType = {
  products: [],
  sortValues: {
      rating: "rating",
      price: "price",
      asc: "asc"
  },
  activeSortIndex: 0,
  typeProduct: '',
  typeModal: 'login',
  isOpenModal: false,
  city: ''
  
}
export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async ({product, sort}:{product:string,sort: string}) => {
    const response = await getProducts(product,sort)
    return {products: response, typeProduct:product}
  }
)
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setIndexSort: (state, action) => {
      state.activeSortIndex = action.payload
    },
    deleteIndexSort: (state) => {
      state.activeSortIndex = 0
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    },
    setTypeModal: (state, action: PayloadAction<'registration' | 'login'>) => {
      state.typeModal = action.payload
    },
    setisOpenModal: (state) => {
      state.isOpenModal = !state.isOpenModal
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.pending, (state, action) => {
        state.products = []
      })
    builder.addCase(
      fetchProducts.fulfilled, (state, action:PayloadAction<{products: ProductsType[], typeProduct:string}>) => {
        state.products = action.payload.products
        state.typeProduct = action.payload.typeProduct
      })
    builder.addCase(
      fetchProducts.rejected, (state, action) => {
        alert('Вибачте, щось пішло не так')
      })
  }
})

export const { setIndexSort,deleteIndexSort,setCity,setTypeModal,setisOpenModal } = productsSlice.actions

export default productsSlice.reducer
