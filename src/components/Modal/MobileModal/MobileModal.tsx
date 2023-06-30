import React, { ReactNode, useState } from 'react';
import styles from './MobileModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCity } from '../../../redux/slices/ProductsSlice';
import { RootState } from '../../../redux/store';
import { setLanguage } from '../../../redux/slices/LanguageSlice';
interface MobileModalProps {
    children: string[]
    type: string
    closeModal(): void
}
const MobileModal: React.FC<MobileModalProps> = ({ type, children, closeModal }) => {
  const {languages,language} = useSelector((state:RootState)=>state.languages)
    const dispatch = useDispatch();
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, value: string,type:string,) => {
      e.preventDefault();
      if (type === 'city') {
        dispatch(setCity(value))
      } else {
        dispatch(setLanguage(value.toLocaleLowerCase() as "ua"|"en"))
      }

      closeModal();
    };
  
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    };
  
    return (
      <>
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
          <div className={styles.modalContent}>
            <h5 className={styles.title}>{languages[language][type]}</h5>
            <button className={styles.modalClose} onClick={closeModal}>
              &times;
            </button>
            {children.map((item, index) => (
              <li className={styles.item} key={index}>
                {type === "numbers" ? (
                  <a className={styles.link} href={`tel:${item}`}>
                    {languages[language][item] || item}
                  </a>
                ) : (
                  <a
                    onClick={(e) => handleClick(e, item,type)}
                    className={styles.link}
                    href="#"
                  >
                    {languages[language][item] || item}
                  </a>
                )}
              </li>
            ))}
          </div>
        </div>
      </>
    );
  };
  
  export default MobileModal;


  