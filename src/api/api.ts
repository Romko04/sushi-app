import axios from "axios"
import { ProductsType } from "../types/types"
const instance = axios.create({
    baseURL: 'https://641175dce96e5254e2d6278d.mockapi.io/',
})
interface getSetsApi {
    data: ProductsType[]
}
export const getProducts = async (product: string, sort: string = '') => {
    const res: getSetsApi = await instance.get(`${product}?sortBy=${sort}`)
    return res.data
}