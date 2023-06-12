import { ReactElement } from "react"

export type componentsLystType = {
    component: ReactElement, link: string
}
export type linksLystType = {
    title: string, linkImg?: string, link: string
}
export type locationType = {
    hash: string
    key: string
    pathname: string
    search: string
    state: null
}
export type ProductsType = {
    id: number
    name: string
    description: string[],
    price: number
    image: string
    
}
export type ProductsBasketType = {
    id: number
    name: string
    description: string[]
    price: number
    image: string
    typeProduct?: string
    counter?: number
}