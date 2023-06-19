import React from 'react';
import Slide1 from './img/banner1.png'
import Slide2 from './img/banner2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.scss'
import { Pagination } from 'swiper';
import { t } from 'i18next';

export default () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="swiper__slide-content">
          <div className="swiper__slide-img">
            <img src={Slide1} alt="slideBanner" />
            <div className='swiper__slide-text'>
              <span className='swiper__slide-text--big'>{t('bannerTextBig1')}</span>
              <span className='swiper__slide-text--small'>{t('bannerTextSmall1')}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__slide-content">
          <div className="swiper__slide-img">
            <img src={Slide2} alt="slideBanner" />
            <div className='swiper__slide-text'>
              <span className='swiper__slide-text--big'>{t('bannerTextBig2')}</span>
              <span className='swiper__slide-text--small swiper__slide-text--small--white'>{t('bannerTextSmall2')}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__slide-content">
          <div className="swiper__slide-img">
            <img src={Slide1} alt="slideBanner" />
            <div className='swiper__slide-text'>
              <span className='swiper__slide-text--big'>{t('bannerTextBig1')}</span>
              <span className='swiper__slide-text--small'>{t('bannerTextSmall1')}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
