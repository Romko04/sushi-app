import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slide1 from '../../../../../assets/img/home/swiper2/slide1.svg'
import './swiperRec.scss'
import { Navigation } from 'swiper';
export default () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={4}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
    >
      {[... new Array(10)].map((_, index:number) => {
        return (
          <SwiperSlide key={index}>
            <div className="swiper__slide-img recommendations__swiper-slide__img product__card-img">
              <img src={Slide1} alt="slideRecommentations" />
            </div>
            <div className="recommendations__swiper-slide__content product__card-content">
              <h4 className="recommendations__swiper-slide__title product__card-title">Samurai set</h4>
              <p className="recommendations__swiper-slide__text product__card-text">
                6x Футомаки Филадельфия
                6x Футомаки Тунец
                6x Футомаки Креветки в панко
                6x Футомаки Cаке Гриль
              </p>
              <div className="recommendations__swiper-slide__content-bottom product__card-content-bottom">
                <button className="button recommendations__swiper-slide__btn product__card-btn">В корзину</button>
                <span className="recommendations__swiper-slide__price product__card-price">215,00 zł</span>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};
