import React from 'react';

import BasketData from './sections/BasketData'
import Shipping from './sections/Shipping';
import BasketSideBar from './sections/BasketSideBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import BasketProductCard from './sections/BasketProductCard';

const Basket: React.FC = () => {
    const {products,totalCount} = useSelector((state:RootState)=>state.basket)
    return (
        <div className='basket__wrapper'>
            <div className="container basket__container">
                <section className="basket">
                    <div className="basket__login">
                        <div className="basket__login-content">
                            <h5 className="basket__login-title">Уже есть аккаунт?</h5>
                            <span className="basket__login-text">Войдите что бы ускорить оформление</span>
                        </div>
                        <button className="button basket__login-btn">Войти</button>
                    </div>
                    <div className="basket__order">
                        <div className="basket__order-top">
                            <h4 className="basket__order-top-title">Ваш заказ</h4>
                            <span className="basket__order-top-count">В корзине {totalCount} товара</span>
                        </div>
                        <ul className="basket__order-list">
                            {products.map((item, index) => <BasketProductCard key={index} item={{...item}}/>)}
                        </ul>
                    </div>

                </section>
                <BasketData />
                <Shipping />
            </div>
            <BasketSideBar />
        </div>
    )
}
export default Basket