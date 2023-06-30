import { valuesDataForm } from "../../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
interface BasketDataProps {
    values: valuesDataForm;
    handleChange: (e: React.ChangeEvent<any>) => void;
}
const Shipping: React.FC<BasketDataProps> = ({ values, handleChange }) => {
    const {languages,language} = useSelector((state:RootState)=>state.languages)
    return (
        <section className="shipping">
            <div className="shipping__types">
                <span className="shipping__type shipping__type-left shipping__type-active--type">{languages[language]['shipping__type-left']}</span>
                <span className="shipping__type shipping__type-right">{languages[language]['shipping__type-right']}</span>
            </div>
            <div className="data--form">
                <label className="data--label">
                    <input
                        className="data--input shipping__input"
                        value={values.address}
                        onChange={handleChange}
                        name="address"
                        type="text"
                        placeholder={languages[language]["shipping__input1"]}
                    />
                    {languages[language]['data--label4']}
                </label>
                <label className="data--label">
                    <input
                        className="data--input shipping__input"
                        type="text"
                        placeholder={languages[language]["shipping__input2"]}
                        value={values.entrance}
                        name="entrance"
                        onChange={handleChange}
                    />
                    {languages[language]['data--label5']}
                </label>
                <label className="data--label">
                    <input className="data--input shipping__input"
                        type="text"
                        name="apartment"
                        placeholder={languages[language]["shipping__input3"]}
                        value={values.apartment}
                        onChange={handleChange}
                    />
                    {languages[language]['data--label6']}
                </label>
                <label className="data--label">
                    <input
                        className="data--input shipping__input"
                        type="text"
                        placeholder={languages[language]["shipping__input4"]}
                        name="floor"
                        value={values.floor}
                        onChange={handleChange}
                    />
                    {languages[language]['data--label7']}
                </label>
            </div>
        </section>
    )
}
export default Shipping