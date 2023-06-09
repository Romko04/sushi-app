import React, { useEffect, useState } from 'react';
import Logo from './icons/logo.svg'
import LogoMobile from './icons/headerMobile/logomobile.svg'
import {ReactComponent as Logo2} from './icons/headerMobile/logo2.svg'
import DropDown from './DropDown/DropDown';
import NavigationMobile from './Navigation/NavigationMobile/NavigationMobile';
import Nav from './Navigation/Nav';
import NavRight from './Navigation/NavRight';
import { Link } from 'react-router-dom';
import { DropdownOptionsType } from '../../types/types';
const Header = () => {
    const dropDowns: DropdownOptionsType = {
        numbers: ['+380 96 560 71 22', '+380 96 420 71 23', '+380 96 839 71 23'],
        cities: ['kyiev', 'london'],
        languages: ['UA', 'EN']
    }
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <header className="header">
            <Link className="header__logo" to='/'>
            {
            windowWidth > 999 
            ?<img className="header__logo-img" src={Logo} alt="logo"></img>
            :<img className="header__logo-img" src={LogoMobile} alt="logo"></img>
            }
                
            </Link>
            <Nav />
            {
                windowWidth > 893 
                ? <>
                    <DropDown list={dropDowns.numbers} type='numbers' />
                    <DropDown list={dropDowns.languages} type='languages' />
                    <DropDown list={dropDowns.cities} type='cities' />
                </>
                :<NavigationMobile/>

            }
            <div className="header__content-right">
            {
                windowWidth > 893 
                ? <NavRight />
                :<Logo2/>
            }

            </div>

        </header>
    );
}

export default Header;
