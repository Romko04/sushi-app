import React from 'react';
import OurMission from "./img/img1.svg";
import OurOrders from "./img/ordersback.png";
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const AboutUs: React.FC = () => {
    const {languages,language} = useSelector((state:RootState)=>state.languages)
    return (
        <>
            <section className="aboutUs">
                <div className="container">
                    <div className="aboutUs__content-text content-text">
                        <h2 className="title aboutUs__title">
                            {languages[language]["aboutUs__title"]}
                        </h2>
                        <p className='aboutUs__text'>{languages[language]["aboutUs__text"]}</p>
                    </div>
                    <div className="aboutUs__content">
                        <div className="aboutUs__content-img__wrapper">
                            <img src={OurMission} alt="ourMission" />
                            <span className="aboutUs__content-img__wrapper-title">{languages[language]["aboutUs__content-img__wrapper-title"]}</span>
                        </div>
                        <div className="aboutUs__order-content">
                            <img src={OurOrders} alt="ourOrders" />
                            <span className="aboutUs__order-content_title">{languages[language]["aboutUs__order-content_title"]}</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUs
