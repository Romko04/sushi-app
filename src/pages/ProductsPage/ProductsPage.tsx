import React, { useEffect } from "react"
import ProductCard from "../../components/ProductCard"
import { useDispatch, useSelector } from "react-redux";
import { deleteIndexSort, fetchProducts, setIndexSort } from "../../redux/slices/ProductsSlice";
import { AppDispatch, RootState } from "../../redux/store";
import Sort from "../../components/Sort/Sort";
import { Link, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ProductsPage: React.FC = () => {
    const {products,sortValues,activeSortIndex} = useSelector((state:RootState)=>state.products)
    const dispatch: AppDispatch = useDispatch()
    const { t } = useTranslation()
    const { breakpoint } = useParams<string>()
    const location = useLocation()
    const keys = Object.keys(sortValues)
    useEffect(() => {
        debugger
        const searchParams = new URLSearchParams(location.search);
        const sortParam = searchParams.get('sort');
        if (sortParam){
           if (breakpoint) {
            dispatch(fetchProducts({ product: breakpoint, sort: sortParam}))
            dispatch(dispatch(setIndexSort(keys.indexOf(sortParam))))
           }
        } 
        else {
            if (breakpoint) {
                dispatch(deleteIndexSort())
                dispatch(fetchProducts({ product: breakpoint, sort: keys[activeSortIndex]}))
            }
        }
    }, [])
    return (
        <section className="product">
            <div className="container">
                <div className="product__content-text content-text">
                    <h2 className="title product__title">
                        {t(breakpoint + '')}
                    </h2>
                    <Sort breakpoint={breakpoint} sortValues={sortValues} activeSortIndex={activeSortIndex} />
                </div>
                <div className="product__content-items">
                    {products.length > 1 && products.map((item, index: number) => <Link className="product__content-link" to={'' + item.id}><ProductCard key={index} {...item} /></Link>)}
                </div>
            </div>
        </section>
    )
}
export default ProductsPage

