import React from 'react';
import Map from '../../../../assets/img/home/shipping/map.jpg'
const Shipping: React.FC = () => {
    return (
        <section className="shipping">
            <div className="container">
            <div className="shipping__content-text content-text">
                <h2 className="title shipping__title">
                    Куда мы доставляем?
                </h2>
                <span className="shipping__subtitle subtitle">Мы доставляем по всему Кракову и ближайшим районам, чтобы вы могли наслаждаться вкусной едой без ограничений</span>
            </div>
            <img className="shipping__img" src={Map} alt="map" />
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
            </div>
        </section>
    )
}
export default Shipping
