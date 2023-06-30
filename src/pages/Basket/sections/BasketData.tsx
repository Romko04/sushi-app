import React from 'react';

import { valuesDataForm } from '../../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
interface BasketDataProps {
    values: valuesDataForm;
    handleChange: (e: React.ChangeEvent<any>) => void;
}
const BasketData: React.FC<BasketDataProps> = ({ values, handleChange }) => {
    const {languages,language} = useSelector((state:RootState)=>state.languages)

    return (
        <div className='data'>
            <h4 className="data__title">{languages[language]['data__title']}</h4>
            <div className="data--form">
                <label className="data--label">
                    <input
                        className="data--input data__form-input"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                    />
                    {languages[language]['data--label1']}
                </label>
                <label className="data--label">
                    <input
                        className="data--input data__form-input"
                        type="text"
                        name="number"
                        onChange={handleChange}
                        value={values.number}
                    />
                    {languages[language]['data--label2']}
                </label>
                <label className="data--label">
                    <textarea
                        className="data--input data__form-textarea--comments"
                        name="coment"
                        onChange={handleChange}
                        value={values.coment}
                    ></textarea>
                    {languages[language]['data--label3']}
                </label>
            </div>
            </div>
            );
};

            export default BasketData;
