import React from 'react';
import OurMission from "../../../../assets/img/home/about/img1.svg";
import OurOrders from "../../../../assets/img/home/about/img2.png";

const AboutUs: React.FC = () => {
    return (
        <>
            <section className="aboutUs">
                <div className="container">
                    <div className="aboutUs__content-text content-text">
                        <h2 className="title aboutUs__title">
                            Sushi Dream  — это
                        </h2>
                        <span className="aboutUs__subtitle subtitle">Больше, чем просто доставка суши. Мы стремимся к тому, чтобы вы получили истинное удовольствие от свежести и вкуса японской кухни</span>
                    </div>
                    <div className="aboutUs__content">
                        <div className="aboutUs__content-img__wrapper">
                            <img src={OurMission} alt="ourMission" />
                            <h4 className="aboutUs__content-img__wrapper-title">Наша миссия — предоставлять продукт по честной цене, уделять ему заботу и внимание. </h4>
                        </div>
                        <img src={OurOrders} alt="ourOrders" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUs
