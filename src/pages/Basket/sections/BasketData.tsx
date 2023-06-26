import React from 'react';
import { useTranslation } from 'react-i18next';
import { valuesDataForm } from '../../../types/types';
interface BasketDataProps {
    values: valuesDataForm;
    handleChange: (e: React.ChangeEvent<any>) => void;
}
const BasketData: React.FC<BasketDataProps> = ({ values, handleChange }) => {
    const { t } = useTranslation();

    return (
        <div className='data'>
            <h4 className="data__title">{t('data__title')}</h4>
            <div className="data--form">
                <label className="data--label">
                    <input
                        className="data--input data__form-input"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                    />
                    {t('data--label1')}
                </label>
                <label className="data--label">
                    <input
                        className="data--input data__form-input"
                        type="text"
                        name="number"
                        onChange={handleChange}
                        value={values.number}
                    />
                    {t('data--label2')}
                </label>
                <label className="data--label">
                    <textarea
                        className="data--input data__form-textarea--comments"
                        name="coment"
                        onChange={handleChange}
                        value={values.coment}
                    ></textarea>
                    {t('data--label3')}
                </label>
            </div>
            </div>
            );
};

            export default BasketData;
