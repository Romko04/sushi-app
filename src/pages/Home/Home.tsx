import React from 'react';
import Banner from './sections/Banner/Banner';
import Recommendations from './sections/Recomendations/Recommendations';
const Home: React.FC = () => {
    return (
        <>
            <Banner />
            <Recommendations />
            <section className="menu">
                <div className="container">
                    <div className="menu__content-text content-text">
                        <h2 className="title menu__title">
                            Откройте для себя новые вкусы
                        </h2>
                        <span className="menu__subtitle subtitle">Созданные нами с любовью и заботой</span>
                    </div>
                    <div className="menu__content">
                        <nav className="menu__navigation">
                            <ul className="menu__navigation-list">
                                <li className="menu__navigaton-item">
                                    <a href="" className="menu__navigaton-link"><img src="./img/svg/menu/sety1.svg" alt="" className="menu__navigaton-img" /></a>
                                </li>
                                <li className="menu__navigaton-item">
                                    <a href="" className="menu__navigaton-link"><img src="./img/svg/menu/urumaki2.svg" alt="" className="menu__navigaton-img" /></a>
                                </li>
                                <li className="menu__navigaton-item">
                                    <a href="" className="menu__navigaton-link"><img src="./img/svg/menu/futumaki3.svg" alt="" className="menu__navigaton-img" /></a>
                                </li>
                                <li className="menu__navigaton-item">
                                    <a href="" className="menu__navigaton-link"><img src="./img/svg/menu/hosomaki4.svg" alt="" className="menu__navigaton-img" /></a>
                                </li>
                                <li className="menu__navigaton-item">
                                    <a href="" className="menu__navigaton-link"><img src="./img/svg/menu/nigiri5.svg" alt="" className="menu__navigaton-img" /></a>
                                </li>
                                <li className="menu__navigaton-item">
                                    <a href="" className="menu__navigaton-link"><img src="./img/svg/menu/springroly6.svg" alt="" className="menu__navigaton-img" /></a>
                                </li>
                                <li className="menu__navigaton-item">
                                    <a href="" className="menu__navigaton-link"><img src="./img/svg/menu/tartary7.svg" alt="" className="menu__navigaton-img" /></a>
                                </li>
                                <li className="menu__navigaton-item">
                                    <a href="" className="menu__navigaton-link"><img src="./img/svg/menu/salat8.svg" alt="" className="menu__navigaton-img" /></a>
                                </li>
                                <li className="menu__navigaton-item">
                                    <a href="" className="menu__navigaton-link"><img src="./img/svg/menu/salats9.svg" alt="" className="menu__navigaton-img" /></a>
                                </li>
                                <li className="menu__navigaton-item">
                                    <a href="" className="menu__navigaton-link"><img src="./img/svg/menu/sousy10.svg" alt="" className="menu__navigaton-img" /></a>
                                </li>
                                <li className="menu__navigaton-item">
                                    <a href="" className="menu__navigaton-link"><img src="./img/svg/menu/drinks11.svg" alt="" className="menu__navigaton-img" /></a>
                                </li>
                                <li className="menu__navigaton-item">
                                    <a href="" className="menu__navigaton-link"><img src="./img/svg/menu/Additionally12.svg" alt="" className="menu__navigaton-img" /></a>
                                </li>
                                <li className="menu__navigaton-item">
                                    <a href="" className="menu__navigaton-link"><img src="./img/svg/menu/link13.svg" alt="" className="menu__navigaton-img" /></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

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
                            <img src="./img/svg/menu/about/img1.svg" alt="" />
                            <h4 className="aboutUs__content-img__wrapper-title">Наша миссия — предоставлять продукт по честной цене, уделять ему заботу и внимание. </h4>
                        </div>
                        <img src="./img/svg/menu/about/img2.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="shipping">
                <div className="shipping__content-text content-text">
                    <h2 className="title shipping__title">
                        Куда мы доставляем?
                    </h2>
                    <span className="shipping__subtitle subtitle">Мы доставляем по всему Кракову и ближайшим районам, чтобы вы могли наслаждаться вкусной едой без ограничений</span>
                </div>
                <img className="shipping__img" src="./img/map.jpg" alt="" />
                <div className="shipping__conditions">
                    <h2 className="title shipping__conditions-title">Условия доставки </h2>
                    <div className="shipping__conditions-content">
                        <div className="shipping__conditions-content__left">
                            <p className="shipping__conditions-content__text">До 5 км от нашего локала — бесплатно,<br />5+ км — 9,90 zł</p>
                            <div className="shipping__conditions-content__worktime">
                                <h5 className="shipping__conditions-content__worktime-title">Время работы:</h5>
                                <p className="shipping__conditions-content__worktime-text">Пн-Чт 12:00 до 00:00<br /> Пт-Вс 12:00 до 1:00</p>
                            </div>
                        </div>
                        <div className="shipping__conditions-content__left">
                            <p className="shipping__conditions-content__text">Минимальный заказ: 50 zł</p>
                            <div className="shipping__conditions-content__worktime">
                                <h5 className="shipping__conditions-content__worktime-title">Время доставки:</h5>
                                <p className="shipping__conditions-content__worktime-text"> Доставка: 60 - 90<br /> минут Самовывоз: 40 - 60 минут</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shipping__btn">
                    <button className="button">Детальная информация</button>
                </div>
            </section>
        </>
    )
}
export default Home