import React from 'react';
import SwiperSlider from './swiper/swiperSlider';
const Banner: React.FC = () => {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <SwiperSlider />
                </div>
            </section>
        </>
    )
}
export default Banner
