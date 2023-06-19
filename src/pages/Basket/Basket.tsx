import React from 'react';

import BasketData from './sections/BasketData'
import Shipping from './sections/Shipping';
import BasketSideBar from './sections/BasketSideBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import BasketProductCard from './sections/BasketProductCard';
import { useTranslation } from 'react-i18next';

const Basket: React.FC = () => {
    const {t} = useTranslation()
    const {products,totalCount} = useSelector((state:RootState)=>state.basket)
    return (
        <div className='basket__wrapper'>
            <div className="container basket__container">
                <section className="basket">
                    <div className="basket__login">
                        <div className="basket__login-content">
                            <h5 className="basket__login-title">{t('basket__login-title')}</h5>
                            <span className="basket__login-text">{t('basket__login-text')}</span>
                        </div>
                        <button className="button basket__login-btn">{t('basket__login-btn')}</button>
                    </div>
                    <div className="basket__order">
                        <div className="basket__order-top">
                            <h4 className="basket__order-top-title">{t('basket__order-top-title')}</h4>
                            <span className="basket__order-top-count">{t('basket__order-top-count1')} {totalCount} {t('basket__order-top-count2')}</span>
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