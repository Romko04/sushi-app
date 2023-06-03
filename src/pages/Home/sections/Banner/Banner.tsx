import React from 'react';
import SwiperBanner from './swiper/swiperBanner';
import { Link } from 'react-router-dom';
const Banner: React.FC = () => {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <SwiperBanner />
                    <div className="banner__content">
                        <h2 className="banner__content--title">Самые вкусные суши Кракова</h2>
                        <p className="banner__content--text">Максимум вкуса минимум риса вместе с Sushi Dream</p>
                        <Link className="banner__content-link" to="/menu"><button className="banner__content-btn button">Перейти в меню</button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner
