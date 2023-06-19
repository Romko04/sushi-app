import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProductsType } from '../../types/types'
export type sortListType = {
  [key:string]: string
}
export interface initialStateType {
    products: (ProductsType & {counter:number})[]
    totalCount: number
}
const initialState: initialStateType = {
  products: [],
  totalCount: 0
}
const searchProduct  = (state:initialStateType, product:ProductsType & {counter:number}) => {
  return state.products.find((item)=>item.id === product.id)
}
const findTotalCount = (state:initialStateType) => {
  return state.totalCount = state.products.reduce((total,currentItem) => total + currentItem.counter,0)
}
export const productsSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setProduct: (state, action:PayloadAction<ProductsType & {counter:number,typeProduct?:string}>) => {
      const findItem = searchProduct(state,action.payload)
      if (findItem) {
        findItem.counter++
      }
      else {
        state.products.push(action.payload)
      }
      state.totalCount = findTotalCount(state)
    },
    incrementProduct: (state, action:PayloadAction<ProductsType & {counter:number}>) => {
      const findItem = searchProduct(state, action.payload)
      if (findItem) findItem.counter++
      state.totalCount = findTotalCount(state)
    },
    deincrementProduct: (state, action:PayloadAction<ProductsType & {counter:number}>) => {
      const findItem = searchProduct(state, action.payload)
      if (findItem && findItem.counter !== 1) findItem.counter--
      else {
        state.products = state.products.filter((item)=>{
          return (
            item.id !== findItem?.id &&
            findItem &&
            item.name !== findItem.name
          );
        })
      }
      state.totalCount = findTotalCount(state)
    },
    deleteProduct: (state, action:PayloadAction<ProductsType & {counter:number}>) => {
      const findItem = searchProduct(state, action.payload)
      state.products = state.products.filter((item)=>{
        return (
          item.id !== findItem?.id &&
          findItem &&
          item.name !== findItem.name
        );
      })
      state.totalCount = findTotalCount(state)
    },
  },

})

export const { setProduct,incrementProduct,deincrementProduct,deleteProduct} = productsSlice.actions

export default productsSlice.reducer