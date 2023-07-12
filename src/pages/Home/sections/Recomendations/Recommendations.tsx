import React from 'react';
import SwiperRec from './swiper/swiperRec';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { Link } from 'react-router-dom';
const Recommendations: React.FC = () => {
    const {languages,language} = useSelector((state:RootState)=>state.languages)
    return (
        <section className="recommendations">
            <div className="container">
                <div className="recommendations__content content-text">
                    <h2 className="recommendations__content-title title">{languages[language]['recommendations__content-title']}</h2>
                    <p className="recommendations__content-text subtitle">
                        {languages[language]['recommendations__content-text']}
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
                    <Link to='/menu'><button className="recommendations__swiper-btn button">{languages[language]['recommendations__swiper-btn']}</button></Link>
                </div>
            </div>
        </section>
    )
}
export default Recommendations