import React, { useEffect } from "react"
import ProductCard from "../../components/ProductCard"
import { useDispatch, useSelector } from "react-redux";
import { deleteIndexSort, fetchProducts, setIndexSort } from "../../redux/slices/ProductsSlice";
import { AppDispatch, RootState } from "../../redux/store";
import Sort from "../../components/Sort/Sort";
import { Link, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProductLoader from "../../components/ProductLoader";

const ProductsPage: React.FC = () => {
    const {products,sortValues,activeSortIndex,typeProduct} = useSelector((state:RootState)=>state.products)
    const dispatch: AppDispatch = useDispatch()
    const { t } = useTranslation()
    const { breakpoint } = useParams()
    const location = useLocation()
    const keys = Object.keys(sortValues)
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const sortParam = searchParams.get('sort');
        if (sortParam){
            dispatch(fetchProducts({ product: breakpoint as string, sort: sortParam}))
            dispatch(dispatch(setIndexSort(keys.indexOf(sortParam))))
        } 
        else {
                dispatch(deleteIndexSort())
                dispatch(fetchProducts({ product: breakpoint as string, sort: keys[activeSortIndex]}))
        }
    }, [])
    return (
        <section className="product">
            <div className="container">
                <div className="product__content-text content-text">
                    <h2 className="title product__title">
                        {t(breakpoint + '')}
                    </h2>
                    <Sort breakpoint={typeProduct} sortValues={sortValues} activeSortIndex={activeSortIndex} />
                </div>
                <div className="product__content-items">
                    {products.length > 1 
                    ?products.map((item, index: number) => <ProductCard key={index} {...item} typeProduct={typeProduct} />)
                    :[...new Array(10)].map((_, index: number) => <ProductLoader key={index}/>)
                    }
                </div>
            </div>
        </section>
    )
}
export default ProductsPage

