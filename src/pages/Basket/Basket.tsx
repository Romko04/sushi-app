import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { valuesDataForm } from '../../types/types';
import { Formik } from 'formik';
import BasketData from './sections/BasketData';
import BasketSideBar from './sections/BasketSideBar';
import BasketProductCard from './sections/BasketProductCard';
import Shipping from './sections/Shipping';

const Basket: React.FC = () => {
    const {languages,language} = useSelector((state:RootState)=>state.languages)
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
            alert(languages[language]["noProductSelected"])
            return
        }
        for (const key in values) {
            const value: string = values[key as keyof typeof values] as string;
            if (!value) {
                isValid = false;
                alert(languages[language]["fillAllFields"]);
                break;
            }
        }

        if (isValid) {
            alert(languages[language]["orderSubmitted"]);
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
                                        <h5 className="basket__login-title">{languages[language]['basket__login-title']}</h5>
                                        <span className="basket__login-text">{languages[language]['basket__login-text']}</span>
                                    </div>
                                    <button className="button basket__login-btn">{languages[language]['basket__login-btn']}</button>
                                </div>
                                <div className="basket__order">
                                    <div className="basket__order-top">
                                        <h4 className="basket__order-top-title">{languages[language]['basket__order-top-title']}</h4>
                                        <span className="basket__order-top-count">{languages[language]['basket__order-top-count1']} {totalCount} {languages[language]['basket__order-top-count2']}</span>
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

