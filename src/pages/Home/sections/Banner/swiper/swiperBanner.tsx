import React from 'react';
import Slide1UA from './img/bannerUA.png'
import Slide1EN from './img/bannerEN.png'
import Slide2UA from './img/Banner2UA.png'
import Slide2EN from './img/Banner2EN.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.scss'
import { Pagination } from 'swiper';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';

export default () => {
  const {language} = useSelector((state:RootState)=>state.languages)
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
            {
            language === 'ua'
            ? <img src={Slide1UA} alt="slideBanner" />
            : <img src={Slide1EN} alt="slideBanner" />
            }
            
            <div className='swiper__slide-text'>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__slide-content">
          <div className="swiper__slide-img">
          {
            language === 'ua'
            ? <img src={Slide2UA} alt="slideBanner" />
            : <img src={Slide2EN} alt="slideBanner" />
            }
            <div className='swiper__slide-text'>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__slide-content">
          <div className="swiper__slide-img">
          {
            language === 'ua'
            ? <img src={Slide1UA} alt="slideBanner" />
            : <img src={Slide1EN} alt="slideBanner" />
            }
            <div className='swiper__slide-text'>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
