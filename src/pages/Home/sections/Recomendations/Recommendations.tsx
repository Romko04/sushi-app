import React from 'react';
import SwiperRec from './swiper/swiperRec';
const Recommendations: React.FC = () => {
    return (
        <section className="recommendations">
            <div className="container">
                <div className="recommendations__content content-text">
                    <h2 className="recommendations__content-title title">Не знаете, какие суши выбрать? </h2>
                    <p className="recommendations__content-text subtitle">
                        Попробуйте наши популярные сеты и окунитесь в мир настоящей японской кухни
                    </p>
                </div>
                <SwiperRec />
                <div className="recommendations__swiper-buttons">
                    <button className="swiper-button-prev recommendations__swiper-prev">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="recommendations__swiper-icon" d="M9.5 1L1 9.5M1 9.5L9.5 18M1 9.5H18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button className="swiper-button-next recommendations__swiper-next">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path className="recommendations__swiper-icon" d="M9.5 1L18 9.5M18 9.5L9.5 18M18 9.5H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button className="recommendations__swiper-btn button">В магазин</button>
                </div>
            </div>
        </section>
    )
}
export default Recommendations