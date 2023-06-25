import { ReactElement } from "react"

export type componentsLystType = {
    component?: ReactElement, link: string, value?: string
}
export type linksLystType = {
    title: string, linkImg?: string, value: string
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
    price: number
    name: { [key: string]: string }
    rating: string
    description: productValuesType
    image: string

}
export type productValuesType = {
    ua: string[]
    en: string[]
}

export type ProductsBasketType = {
    id: number
    counter: number
    name: { [key: string]: string }
    price: number
    rating: string
    typeProduct?: string
    description: productValuesType
    image: string
}
export type DropdownOptionsType = {
    numbers: string[],
    cities: string[],
    languages: string[],
}