import React from 'react';
import { useTranslation } from 'react-i18next';
const Shipping: React.FC = () => {
    const {t} = useTranslation()
    return (
        <section className="shipping shipping__home">
            <div className="container">
            <div className="shipping__conditions">
                <h2 className="title shipping__conditions-title">{t("shipping__conditions-title")}</h2>
                <div className="shipping__conditions-content">
                    <div className="shipping__conditions-content__left">
                        <p className="shipping__conditions-content__text">{t('shipping__conditions-content__text1')}</p>
                        <div className="shipping__conditions-content__worktime">
                            <h5 className="shipping__conditions-content__worktime-title">{t('shipping__conditions-content__worktime-title1')}</h5>
                            <p className="shipping__conditions-content__worktime-text">{t('shipping__conditions-content__text2')}</p>
                        </div>
                    </div>
                    <div className="shipping__conditions-content__right">
                        <p className="shipping__conditions-content__text">{t('shipping__conditions-content__worktime-text1')}</p>
                        <div className="shipping__conditions-content__worktime">
                            <h5 className="shipping__conditions-content__worktime-title">{t('shipping__conditions-content__worktime-title2')}</h5>
                            <p className="shipping__conditions-content__worktime-text">{t('shipping__conditions-content__worktime-text2')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shipping__btn">
                {/* <button className="button">Детальная информация</button> */}
            </div>
            </div>
        </section>
    )
}
export default Shipping
