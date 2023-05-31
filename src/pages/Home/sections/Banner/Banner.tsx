import React from 'react';
import SwiperBanner from './swiper/swiperBanner';
const Banner: React.FC = () => {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <SwiperBanner />
                    <div className="banner__content">
                        <h2 className="banner__content--title">Самые вкусные суши Кракова</h2>
                        <p className="banner__content--text">Максимум вкуса минимум риса вместе с Sushi Dream</p>
                        <a className="banner__content-link" href="./menu.html"><button className="banner__content-btn button">Перейти в меню</button></a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner
