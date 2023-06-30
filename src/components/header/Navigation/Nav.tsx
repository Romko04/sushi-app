import React from 'react';
import { Link } from 'react-router-dom';
import { linksLystType } from '../../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
const Nav:React.FC = () => {
    const {languages,language} = useSelector((state:RootState)=>state.languages)
    const links:linksLystType[] = [
        {title: 'home', value:"/"},
        {title: 'menu', value:"menu"},
        {title: 'aboutUs', value:"about"},
        {title: 'shipping', value:"shipping"},
        ]
    return (
        <nav className="nav">
            <ul className="nav__navigation-list">
                <nav className="nav__body">
                    <ul className="nav__body-items">
                    {links.map((i, index) => {
                        return (
                            <li key={index} className="nav__menu-item">
                                <Link className='nav__link' to={i.value}>{languages[language][i.title]}</Link>
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
