import React, { useEffect } from "react"
import ProductCard from "../../components/ProductCard"
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, sortListType } from "../../redux/slices/ProductsSlice";
import { AppDispatch } from "../../redux/store";
import Sort from "../../components/Sort/Sort";
import { ProductsType } from "../../types/types";
import { Link, useParams } from "react-router-dom";
interface ProductsPagePropsType {
    title: string,
    products: ProductsType[],
    sortItems: sortListType,
    activeSortIndex: number
}
const ProductsPage:React.FC<ProductsPagePropsType> = ({title,products,sortItems,activeSortIndex}) => {
    const dispatch: AppDispatch = useDispatch()
    const {breakpoint, id} = useParams<string>()
    useEffect(() => {
        const keys = Object.keys(sortItems)
        if (breakpoint !== undefined) dispatch(fetchProducts({product:breakpoint,sort:keys[activeSortIndex]}))
    }, [])
    return (
        <section className="product">
            <div className="container">
                <div className="product__content-text content-text">
                    <h2 className="title product__title">
                        {title}
                    </h2>
                    <Sort breakpoint={breakpoint} sortItems={sortItems} activeSortIndex={activeSortIndex}/>
                </div>
                <div className="product__content-items">
                    {products.length > 1 && products.map((item, index: number) => <Link className="product__content-link" to={''+item.id}><ProductCard key={index} {...item} /></Link>)}
                </div>
            </div>
        </section>
    )
}
export default ProductsPage
function fetchSets(arg0: { product: string; sort: string; }): any {
    throw new Error("Function not implemented.");
}

