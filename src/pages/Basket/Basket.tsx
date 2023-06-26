import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next';
import { valuesDataForm } from '../../types/types';
import { Formik } from 'formik';

import BasketData from './sections/BasketData';
import BasketSideBar from './sections/BasketSideBar';
import BasketProductCard from './sections/BasketProductCard';
import Shipping from './sections/Shipping';

const Basket: React.FC = () => {
    const { t } = useTranslation();
    const { products, totalCount } = useSelector((state: RootState) => state.basket);

    const initialValuesData: valuesDataForm = {
        name: "",
        number: "",
        coment: "",
        address: "",
        entrance: "",
        apartment: "",
        floor: ""
    };
    const handleSubmit = (values: valuesDataForm) => {
        let isValid = true;
        if (products.length < 1) {
            alert(t("noProductSelected"))
            return
        }
        for (const key in values) {
            const value: string = values[key as keyof typeof values] as string;
            if (!value) {
                isValid = false;
                alert(t("fillAllFields"));
                break;
            }
        }

        if (isValid) {
            alert(t("orderSubmitted"));
        }
    };


    return (
        <Formik
            initialValues={initialValuesData}
            onSubmit={handleSubmit}
        >
            {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
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
                                        {products.map((item, index) => <BasketProductCard key={index} item={{ ...item }} />)}
                                    </ul>
                                </div>
                            </section>
                            <BasketData values={values} handleChange={handleChange} />
                            <Shipping values={values} handleChange={handleChange} />
                        </div>
                        <BasketSideBar />
                    </div>
                </form>

            )}
        </Formik>


    );
}
export default Basket

