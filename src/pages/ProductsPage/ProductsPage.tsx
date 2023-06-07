import React, { useEffect } from "react"
import ProductCard from "../../components/ProductCard"
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, sortListType } from "../../redux/slices/ProductsSlice";
import { AppDispatch } from "../../redux/store";
import Sort from "../../components/Sort/Sort";
import { ProductsType } from "../../types/types";
import { useParams } from "react-router-dom";
interface ProductsPagePropsType {
    title: string,
    products: ProductsType[],
    sortItems: sortListType,
    activeSortIndex: number
}
const ProductsPage:React.FC<ProductsPagePropsType> = ({title,products,sortItems,activeSortIndex}) => {
    const dispatch: AppDispatch = useDispatch()
    const {breakpoint} = useParams<string>()
    useEffect(() => {
        const keys = Object.keys(sortItems)
        if (breakpoint !== undefined) dispatch(fetchProducts({product:breakpoint,sort:keys[activeSortIndex]}))
    }, [])
    return (
        <section className="sety">
            <div className="container">
                <div className="sety__content-text content-text">
                    <h2 className="title sety__title">
                        {title}
                    </h2>
                    <Sort breakpoint={breakpoint} sortItems={sortItems} activeSortIndex={activeSortIndex}/>
                </div>
                <div className="sety__content">
                    {products.length > 1 && products.map((item, index: number) => <ProductCard key={index} {...item} />)}
                </div>
            </div>
        </section>
    )
}
export default ProductsPage
function fetchSets(arg0: { product: string; sort: string; }): any {
    throw new Error("Function not implemented.");
}

