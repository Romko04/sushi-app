import { useTranslation } from "react-i18next"

const Shipping = () => {
    const {t} = useTranslation()
    return (
        <section className="shipping">
            <div className="shipping__types">
                <span className="shipping__type shipping__type-left shipping__type-active--type">{t('shipping__type-left')}</span>
                <span className="shipping__type shipping__type-right">{t('shipping__type-right')}</span>
            </div>
            <form className="data--form">
                <label className="data--label">
                    <input className="data--input shipping__input" type="text" placeholder={t("shipping__input1")as string} />
                    {t('data--label4')}
                </label>
                <label className="data--label">
                    <input className="data--input shipping__input" type="text" placeholder={t("shipping__input2")as string} />
                    {t('data--label5')}
                </label>
                <label className="data--label">
                    <input className="data--input shipping__input" type="text" placeholder={t("shipping__input3")as string} />
                    {t('data--label6')}
                </label>
                <label className="data--label">
                    <input className="data--input shipping__input" type="text" placeholder={t("shipping__input4")as string} />
                    {t('data--label7')}

                </label>
            </form>
        </section>
    )
}
export default Shipping