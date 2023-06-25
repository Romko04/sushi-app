import React from 'react';
import { Link } from 'react-router-dom';
import { linksLystType } from '../../../types/types';
import { useTranslation } from 'react-i18next';
const Nav:React.FC = () => {
    const {t} = useTranslation()
    const links:linksLystType[] = [
        {title: t('home'), value:"/"},
        {title: t('menu'), value:"menu"},
        {title: t('about'), value:"about"},
        {title: t('shipping'), value:"shipping"},
        ]
    return (
        <nav className="nav">
            <ul className="nav__navigation-list">
                <nav className="nav__body">
                    <ul className="nav__body-items">
                    {links.map((i, index) => {
                        return (
                            <li key={index} className="nav__menu-item">
                                <Link className='nav__link' to={i.value}>{i.title}</Link>
                            </li>
                        )
                    })}
                    </ul>
                </nav>
            </ul>
        </nav>
    );
}

export default Nav;
