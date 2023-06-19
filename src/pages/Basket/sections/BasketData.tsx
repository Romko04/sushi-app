import { useTranslation } from "react-i18next"

const BasketData = () => {
    const {t} = useTranslation()
    return (
        <section className="data">
            <h4 className="data__title">{t(" ")}</h4>
            <form className="data--form">
                <label className="data--label">
                    <input className="data--input data__form-input" type="text"  />
                    {t('data--label1')}
                </label>
                <label className="data--label">
                    <input className="data--input data__form-input" type="text"  />
                    {t('data--label2')}
                </label>
                <label className="data--label ">
                    <textarea className="data--input data__form-textarea--comments"></textarea>
                    {t('data--label3')}
                </label>
            </form>
        </section>
    )
}
export default BasketData