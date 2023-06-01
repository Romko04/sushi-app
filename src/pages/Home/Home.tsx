import React from 'react';
import Banner from './sections/Banner/Banner';
import Recommendations from './sections/Recomendations/Recommendations';
import MenuHome from './sections/Menu/menuHome';
import AboutUs from './sections/AboutUs/AboutUs';
import Shipping from './sections/Shipping/Shipping';
const Home: React.FC = () => {
    return (
        <>
            <Banner />
            <Recommendations />
            <MenuHome />
            <AboutUs />
            <Shipping />
        </>
    )
}
export default Home