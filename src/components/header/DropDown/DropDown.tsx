import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCity } from '../../../redux/slices/ProductsSlice';
import { RootState } from '../../../redux/store';
import { setLanguage } from '../../../redux/slices/LanguageSlice';

interface PropsDropDown {
    type: 'numbers' | 'cities' | 'languages';
    list: string[];
}
const DropDown: React.FC<PropsDropDown> = ({ type, list }) => {
    const {languages,language} = useSelector((state:RootState)=>state.languages)
    const dispatch = useDispatch()
    const [isActive, setActive] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const menuRef = useRef<HTMLDivElement | null>(null)
    const handleClickOutside = (e: MouseEvent) => {
        if (!menuRef?.current?.contains(e.target as Node)) {
            setActive(false);
        }
    }
    useEffect(()=>{
        if (type === 'cities') {
            dispatch(setCity(list[activeIndex]))
        }
    },[])
    const handleClickLanguage = (type: string, item: string, event: React.MouseEvent<HTMLLIElement>, index: number) => {
        switch (type) {
            case "cities":
                event.preventDefault()
                setActiveIndex(index)
                dispatch(setCity(item))
                setActive(false)
                break;
            case "languages":
                event.preventDefault()
                setActiveIndex(index)
                dispatch(setLanguage(item as "ua" || 'en'))
                setActive(false)
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        window.addEventListener('click', handleClickOutside)
        return () => {
            window.removeEventListener('click', handleClickOutside)
        };
    }, []);
    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <div className={`
         ${styles.dropdown} 
         ${type === 'cities' && styles.dropdownCities} 
         ${isActive && styles.dropDownActive}
        `}
            ref={menuRef}
        >
            <button
                onClick={handleToggle}
                className={`
                 ${styles.dropdownToggle}
                 ${type !== 'numbers' && styles.dropdownNoNumbers} 
                 ${type === 'cities' && styles.dropdownCityBtn}
                 ${isActive && type === 'cities' && styles.dropdownCityBtnActive}
                `}
            >
                {
                    type === 'cities' ? languages[language]['CitySelection'] : list[activeIndex]
                }

            </button>
            <ul className={`
                ${styles.dropdownMenu} 
                ${isActive && styles.active}
                ${type === 'cities' && styles.dropdownCityMenu}
            `}>
                {list.map((item, index) => (
                    <li
                        key={index}
                        onClick={(event) => handleClickLanguage(type, item.toLowerCase(), event, index)}
                        className={`
                         ${styles.dropdownItem} 
                         ${type !== 'numbers' && styles.dropdownNoNumbers}
                         ${type === 'cities' && styles.dropdownItemCity}

                        `}
                    >
                        <a
                            className=
                            {`
                             ${styles.dropDownLink}
                             ${type === 'cities' && styles.dropDownLinkCity}
                            `}
                            href="tel: 48 696 84 31 31">
                            {languages[language][item] || item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDown;
