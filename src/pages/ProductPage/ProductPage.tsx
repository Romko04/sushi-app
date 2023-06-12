import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store';
import Recommendations from '../Home/sections/Recomendations/Recommendations';
import { fetchProducts } from '../../redux/slices/ProductsSlice';
import { ProductsType } from '../../types/types';
import ProductCounter from '../../components/ProductCounter';
const ProductPage:React.FC= () => {
    const { products,typeProduct } = useSelector((state: RootState) => state.products)
    const  basketProducts = useSelector((state: RootState) => state.basket.products)
    const {breakpoint,id} = useParams()
    let findBasketProuduct:(ProductsType & {counter:number}) | undefined
    let product: ProductsType | undefined
    const dispatch:AppDispatch = useDispatch()
    useEffect(()=>{
        debugger
        if (breakpoint && typeProduct !== breakpoint) dispatch(fetchProducts({product:breakpoint, sort:''}))
    },[products.length,typeProduct,dispatch])
    if (id) {
        product = products.find(item => item.id === +id)
        findBasketProuduct = basketProducts.find(item => item.id === +id && product?.name )
    }
    return (
        <>
            <section className="product">
                <div className="container">
                    <div className="product__content">
                        <img src={product?.image} alt="productimg" />
                        <div className="product__description">
                            <h3 className="title product__description-title">{product?.name}</h3>
                            <ul className="product__description-list">
                                {product?.description.map((item, index) => <li key={index} className="product__description-item">{item}</li>)}
                            </ul>
                            <ProductCounter product={product} findBasketProuduct={findBasketProuduct} />
                        </div>
                    </div>
                </div>
            </section>
            <Recommendations />
        </>
    );
};

export default ProductPage;
