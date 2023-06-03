import React, { ReactElement } from 'react';
import {ReactComponent as User} from '../icons/userRight.svg'
import {ReactComponent as Basket} from '../icons/headerMobile/basket.svg'
import { Link } from 'react-router-dom';


const NavRight:React.FC = () => {
    type linkLystType= {
        component: ReactElement, link: string
    }
    const linksLyst:linkLystType[] = [
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
                                <Link to={`${item.link}`} className="nav__link">{item.component}</Link>
                            </li>
                        )
                    })}
                    <div className="header__right-nav__list-item--basket__value">12</div>
                    </ul>
                </nav>
            </ul>
        </nav>
    );
}

export default NavRight
