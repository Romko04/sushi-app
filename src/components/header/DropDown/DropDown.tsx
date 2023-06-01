import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

interface PropsDropDown {
    type: 'numbers' | 'cities' | 'languages';
    list: string[];
}

const DropDown: React.FC<PropsDropDown> = ({ type, list }) => {
    const [isActive, setActive] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement|null>(null)
    const handleClickOutside = (e:MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setActive(false);
          }
        
        
    }
    useEffect(() => {
        window.addEventListener('click', handleClickOutside )
        return () => {
            window.removeEventListener('click',handleClickOutside)
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
                 ${isActive && type === 'cities' &&styles.dropdownCityBtnActive}
                `}
            >
                {type === 'cities'?'Выбирите ваш город':list[0]}
            </button>
            <ul className={`
                ${styles.dropdownMenu} 
                ${isActive && styles.active}
                ${type === 'cities' && styles.dropdownCityMenu}
            `}>
                {list.map((item, index) => (
                    <li 
                        key={index}
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
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDown;
