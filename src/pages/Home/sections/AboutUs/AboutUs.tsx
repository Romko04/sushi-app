import React from 'react';
import OurMission from "./img/img1.svg";
import OurOrders from "./img/ordersback.png";
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
    const { t } = useTranslation()
    return (
        <>
            <section className="aboutUs">
                <div className="container">
                    <div className="aboutUs__content-text content-text">
                        <h2 className="title aboutUs__title">
                            {t("aboutUs__title")}
                        </h2>
                        <p className='aboutUs__text'>{t('aboutUs__text')}</p>
                    </div>
                    <div className="aboutUs__content">
                        <div className="aboutUs__content-img__wrapper">
                            <img src={OurMission} alt="ourMission" />
                            <span className="aboutUs__content-img__wrapper-title">{t("aboutUs__content-img__wrapper-title")}</span>
                        </div>
                        <div className="aboutUs__order-content">
                            <img src={OurOrders} alt="ourOrders" />
                            <span className="aboutUs__order-content_title">{t("aboutUs__order-content_title")}</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUs
