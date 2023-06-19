import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiperRec.scss'
import { Navigation } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../redux/store';
import { useEffect } from 'react';
import { fetchProducts } from '../../../../../redux/slices/ProductsSlice';
import ProductCard from '../../../../../components/ProductCard';
export const SwiperRec = () => {
  const {products} = useSelector((state:RootState)=>state.products)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
    if (products.length < 1) {
      dispatch(fetchProducts({product:'sets',sort:''}))
    }
  },[])
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        1229: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
    >
      {products.map((item, index:number) => {
        return (
          <SwiperSlide key={index}>
            <ProductCard typeProduct={'sets'} {...item} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};
export default SwiperRec