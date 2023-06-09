import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { ReactComponent as Minus } from './img/minus.svg';
import { ReactComponent as Plus } from './img/plus.svg';
import Recommendations from '../Home/sections/Recomendations/Recommendations';

const ProductPage = () => {
    const { products } = useSelector((state: RootState) => state.products)
    let product
    const { id } = useParams()
    if (id) {
        product = products.find(item => item.id === +id)
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
                            <div className="product__buttons">
                                <div className="product__counter">
                                    <button className="button product__counter-btn btn--plus">
                                        <Minus />
                                    </button>
                                    <span className="product__counter-value">3</span>
                                    <button className="button product__counter-btn btn--plus">
                                        <Plus />
                                    </button>
                                </div>
                                <div className="product__order">
                                    <button className="button product__order-btn">
                                        Добавить в корзину
                                    </button>
                                    <span className="product__order-price">{product?.price}₴</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Recommendations />
        </>
    );
};

export default ProductPage;
