import React, { useEffect, useState } from 'react';
import Logo from './icons/logo.svg'
import LogoMobile from './icons/headerMobile/logomobile.svg'
import {ReactComponent as Logo2} from './icons/headerMobile/logo2.svg'
import DropDown from './DropDown/DropDown';
import NavigationMobile from './Navigation/NavigationMobile/NavigationMobile';
import Nav from './Navigation/Nav';
import NavRight from './Navigation/NavRight';
const Header = () => {
    type dropDownsType = {
        numbers: string[],
        cities: string[],
        languages: string[],
    }
    const dropDowns: dropDownsType = {
        numbers: ['48 696 84 31 31', '48 636 44 31 31', '42 6096 84 32 33'],
        cities: ['London', 'Krakow'],
        languages: ['UA', 'RU', 'PL']
    }
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            console.log(window.innerWidth);
            
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <header className="header">
            <a className="header__logo" href="./index.html">
            {
            windowWidth > 999 
            ?<img className="header__logo-img" src={Logo} alt="logo"></img>
            :<img className="header__logo-img" src={LogoMobile} alt="logo"></img>
            }
                
            </a>
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
