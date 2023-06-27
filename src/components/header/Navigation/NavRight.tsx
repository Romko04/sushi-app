import React, { useState } from 'react';
import { ReactComponent as User } from '../icons/userRight.svg'
import { ReactComponent as Basket } from '../icons/headerMobile/basket.svg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { setisOpenModal } from '../../../redux/slices/ProductsSlice';
const NavRight: React.FC = () => {
    const { totalCount } = useSelector((state: RootState) => state.basket)
    const dispatch:AppDispatch = useDispatch()
    const handleClick = () => {
        dispatch(setisOpenModal())
    }
    return (
        <>
            <nav className="nav">
                <ul className="nav__navigation-list">
                    <nav className="nav__body">
                        <ul className="nav__body-items">
                            <li className="nav__menu-item">
                                <User onClick={handleClick} className='header__right-nav__list-item_img' />
                            </li>
                            <li className="nav__menu-item">
                                <Link to={`/basket`} className="nav__link">
                                    <Basket className='header__right-nav__list-item_img' />
                                </Link>
                            </li>
                            <div className="header__right-nav__list-item--basket__value">{totalCount}</div>
                        </ul>
                    </nav>
                </ul>
            </nav>

        </>
    );
}

export default NavRight
