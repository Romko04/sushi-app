import React from 'react';
import { Link } from 'react-router-dom';
const Nav:React.FC = () => {
    type linkType = {
        title: string,
        link:string
    }
    const links:linkType[] = [
        {title: 'Главная', link:"/"},
        {title: 'Меню', link:"menu"},
        {title: 'О нас', link:"about"},
        {title: 'Доставка', link:"shipping"},
        {title: 'Алергены', link:"shipping"},
        ]
    return (
        <nav className="nav">
            <ul className="nav__navigation-list">
                <nav className="nav__body">
                    <ul className="nav__body-items">
                    {links.map((i, index) => {
                        return (
                            <li key={index} className="nav__menu-item">
                                <Link className='nav__link' to={i.link}>{i.title}</Link>
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
