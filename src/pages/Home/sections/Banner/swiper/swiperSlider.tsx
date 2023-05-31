import React from 'react';
import Slide1 from '../../../../../assets/img/home/slider/slide1.png'
import Slide2 from '../../../../../assets/img/home/slider/slide2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.scss'
import { Pagination } from 'swiper';

  export default () => {
    return (
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide> 
          <div className="swiper__slide-img">
           <img src={Slide1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className="swiper__slide-img">
           <img src={Slide2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className="swiper__slide-img">
           <img src={Slide1} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    );
  };
