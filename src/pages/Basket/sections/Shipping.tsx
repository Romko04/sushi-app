import { useTranslation } from "react-i18next"
import { valuesDataForm } from "../../../types/types";
interface BasketDataProps {
    values: valuesDataForm;
    handleChange: (e: React.ChangeEvent<any>) => void;
}
const Shipping: React.FC<BasketDataProps> = ({ values, handleChange }) => {
    const { t } = useTranslation()
    return (
        <section className="shipping">
            <div className="shipping__types">
                <span className="shipping__type shipping__type-left shipping__type-active--type">{t('shipping__type-left')}</span>
                <span className="shipping__type shipping__type-right">{t('shipping__type-right')}</span>
            </div>
            <div className="data--form">
                <label className="data--label">
                    <input
                        className="data--input shipping__input"
                        value={values.address}
                        onChange={handleChange}
                        name="address"
                        type="text"
                        placeholder={t("shipping__input1") as string}
                    />
                    {t('data--label4')}
                </label>
                <label className="data--label">
                    <input
                        className="data--input shipping__input"
                        type="text"
                        placeholder={t("shipping__input2") as string}
                        value={values.entrance}
                        name="entrance"
                        onChange={handleChange}
                    />
                    {t('data--label5')}
                </label>
                <label className="data--label">
                    <input className="data--input shipping__input"
                        type="text"
                        name="apartment"
                        placeholder={t("shipping__input3") as string}
                        value={values.apartment}
                        onChange={handleChange}
                    />
                    {t('data--label6')}
                </label>
                <label className="data--label">
                    <input
                        className="data--input shipping__input"
                        type="text"
                        placeholder={t("shipping__input4") as string}
                        name="floor"
                        value={values.floor}
                        onChange={handleChange}
                    />
                    {t('data--label7')}
                </label>
            </div>
        </section>
    )
}
export default Shipping