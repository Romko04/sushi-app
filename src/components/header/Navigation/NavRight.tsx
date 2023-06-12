import React from 'react';
import {ReactComponent as User} from '../icons/userRight.svg'
import {ReactComponent as Basket} from '../icons/headerMobile/basket.svg'
import { Link } from 'react-router-dom';
import { componentsLystType } from '../../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
const NavRight:React.FC = () => {
    const {products,totalCount} = useSelector((state:RootState)=>state.basket)
    const linksLyst:componentsLystType[] = [
        {component: <User className='header__right-nav__list-item_img'/>, link:"user"},
        {component: <Basket className='header__right-nav__list-item_img'/>, link:"basket"},
        ]
    return (
        <nav className="nav">
            <ul className="nav__navigation-list">
                <nav className="nav__body">
                    <ul className="nav__body-items">
                    {linksLyst.map((item, index) => {
                        return (
                            <li key={index} className="nav__menu-item">
                                <Link to={`/${item.link}`} className="nav__link">{item.component}</Link>
                            </li>
                        )
                    })}
                    <div className="header__right-nav__list-item--basket__value">{totalCount}</div>
                    </ul>
                </nav>
            </ul>
        </nav>
    );
}

export default NavRight
