import React from 'react';
import Logo from '../../assets/img/svg/logo.svg'
import Nav from './Nav';
import DropDown from './DropDown/DropDown';
const Header = () => {
    type dropDownsType = {
        numbers: string[],
        cities: string[],
        languages: string[],
    }
    const dropDowns:dropDownsType = {
        numbers:['48 696 84 31 31','48 636 44 31 31','42 6096 84 32 33'],
        cities: ['London', 'Krakow'],
        languages: ['UA','RU','PL']
    }
    return (
        <header className="header">
            <a className="header__logo" href="./index.html">
                <img className="header__logo-img" src={Logo} alt="logo"></img>
            </a>
            <Nav />
            <button className="header__burger">
                <span></span>
            </button>
            <DropDown list={dropDowns.numbers} type='numbers' />
            <DropDown list={dropDowns.languages} type='languages' />
            <DropDown list={dropDowns.cities} type='cities' />
            <div className="header__content-right">
                <nav className="header__right-nav">
                    <ul className="header__right-nav__list">
                        <li className="header__right-nav__list-item header__right-nav__list-item--basket">
                            <a
                                className="header__right-nav__list-item_link" href="./basket.html">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="#2A2A2F"
                                    className="header__right-nav__list-item_img" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M24.85 15.6387C24.71 15.4847 24.514 15.4008 24.318 15.4008H3.68201C3.48601 15.4008 3.29 15.4847 3.15 15.6387C3.024 15.7927 2.96801 15.9889 2.98201 16.1988L3.97599 23.7302C4.298 26.166 6.384 28 8.834 28H19.194C21.658 28 23.758 26.166 24.066 23.7162L25.018 16.1848C25.032 15.9888 24.976 15.7927 24.85 15.6387ZM12.6 22.4004C12.6 23.1703 11.97 23.8003 11.2 23.8003C10.43 23.8003 9.8 23.1703 9.8 22.4004V19.6005C9.8 18.8306 10.43 18.2006 11.2 18.2006C11.97 18.2006 12.6 18.8306 12.6 19.6005V22.4004ZM18.2 22.4004C18.2 23.1703 17.57 23.8003 16.8 23.8003C16.03 23.8003 15.4 23.1703 15.4 22.4004V19.6005C15.4 18.8306 16.03 18.2006 16.8 18.2006C17.57 18.2006 18.2 18.8306 18.2 19.6005V22.4004ZM28 10.1511C28 11.8912 26.5902 13.3009 24.85 13.3009H3.15C1.4098 13.3009 0 11.8912 0 10.1511C0 8.41104 1.4098 7.00133 3.15 7.00133H6.20759L10.0002 0.680881C10.3978 0.0159231 11.256 -0.198288 11.921 0.200687C12.5846 0.598262 12.7988 1.45756 12.4012 2.12112L9.4738 6.99996H18.529L15.6016 2.12112C15.204 1.45756 15.4182 0.598262 16.0818 0.200687C16.7454 -0.196888 17.605 0.017323 18.0026 0.680881L21.7952 7.00133H24.8528C26.5902 7.00133 28 8.41104 28 10.1511Z" />
                                </svg>
                            </a>
                            <span className="header__right-nav__list-item--basket__value">12</span>
                        </li>
                        <li className="header__right-nav__list-item"><a className="header__right-nav__list-item_link" href="">
                            <svg width="26" height="30" viewBox="0 0 26 30" xmlns="http://www.w3.org/2000/svg"
                                fill="#2A2A2F" className="header__right-nav__list-item_img">
                                <path
                                    d="M5.00026 8.36804C5.00026 4.3053 8.58929 1 13.0008 1C17.4123 1 21.0013 4.3053 21.0013 8.36804C21.0013 12.4308 17.4123 15.7361 13.0008 15.7361C8.58929 15.7361 5.00026 12.4308 5.00026 8.36804ZM19.5884 17.3144C18.694 17.1051 17.7211 17.223 16.9163 17.6357C14.4873 18.8794 11.5142 18.8794 9.08529 17.6357C8.28204 17.2245 7.3076 17.1081 6.41315 17.3144C3.22574 18.0556 1 20.7199 1 23.7924V25.2822C1 26.2223 1.27199 27.1417 1.78882 27.9434C2.20965 28.5947 2.99855 29 3.84501 29H22.155C23.0014 29 23.7903 28.5962 24.2111 27.9419C24.7279 27.1418 25 26.2223 25 25.2822V23.7924C25.0016 20.7199 22.7758 18.0556 19.5884 17.3144Z" />
                            </svg>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
