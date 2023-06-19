import React from 'react';
import SwiperBanner from './swiper/swiperBanner';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
const Banner: React.FC = () => {
    const {t} = useTranslation()
    const {city} = useSelector((state:RootState)=>state.products)
    return (
        <>
            <section className="banner">
                <div className="container">
                    <SwiperBanner />
                    <div className="banner__content">
                        <h2 className="banner__content--title">{t("banner__content--title")}{t(city)}</h2>
                        <p className="banner__content--text">{t("banner__content--text")}</p>
                        <Link className="banner__content-link" to="/menu"><button className="banner__content-btn button">{t("banner__content-btn")}</button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner