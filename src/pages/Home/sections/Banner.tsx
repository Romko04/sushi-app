import React from 'react';
const Banner: React.FC = () => {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="swiper banner__swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="swiper__slide-img">
                                    <img src="./img/slider/slide1.png" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="swiper__slide-img">
                                    <img src="./img/slider/slide2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="swiper__slide-img">
                                    <img src="./img/slider/slide1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination "></div>
                    </div>
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
