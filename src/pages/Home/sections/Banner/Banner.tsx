import React from 'react';
import SwiperBanner from './swiper/swiperBanner';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
const Banner: React.FC = () => {
    const {languages,language} = useSelector((state:RootState)=>state.languages)
    const {city} = useSelector((state:RootState)=>state.products)
    return (
        <>
            <section className="banner">
                <div className="container">
                    <SwiperBanner />
                    <div className="banner__content">
                        <h2 className="banner__content--title">{languages[language]['banner__content--title']}{languages[language][city]}</h2>
                        <p className="banner__content--text">{languages[language]['banner__content--text']}</p>
                        <Link className="banner__content-link" to="/menu"><button className="button banner__content-btn">{languages[language]['banner__content-btn']}</button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner