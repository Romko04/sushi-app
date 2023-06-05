import axios from "axios"
import { SetsType } from "../types/types"
const instance = axios.create({
    baseURL: 'https://641175dce96e5254e2d6278d.mockapi.io/',
})
interface getSetsApi {
    data: SetsType[]
}
export const productsApi = {
    getSets: async () => {
        const res: getSetsApi = await instance.get('items')
        return res.data
    }
}