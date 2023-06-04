import React from "react"
import Sety from './img/sety.jpg'
import Hosonaki from './img/hosonaki.jpg'
import Nigiri from './img/nigiri.jpg'
import Urumaki from './img/uramaki.webp'
import Sousy from './img/sousy.jpg'
import Drinks from './img/drinks.jpg'
import Salats from './img/salats.png'
import { linksLystType } from "../../types/types"
import { Link  } from "react-router-dom"
const Menu = () => {
    const menuList:linksLystType[] = [
        {title:'Сеты ', linkImg: Sety, link: 'sety'},
        {title:'Хосонаки', linkImg: Hosonaki, link: 'hosonaki'},
        {title:'Урумаки', linkImg: Urumaki, link: 'urumaki'},
        {title:'Нигири', linkImg: Nigiri, link: 'nigiri'},
        {title:'Салати', linkImg: Salats, link: 'salats'},
        {title:'Напитки', linkImg: Drinks, link: 'drinks'},
        {title:'Соусы', linkImg: Sousy, link: 'sousy'},
    ]
    return (
        <section className="menu">
            <div className="menu__container">
                <h2 className="title menu__title">Меню</h2>
                <nav className="menu__navigation">
                    <ul className="menu__navigation-list">
                        {menuList.map((item,index)=>{
                            return (
                                <li key={index} className="menu__navigation-item">
                                <Link to={item.link} className="menu__navigation-link">
                                    <img src={item.linkImg} alt="Сети" className="menu__navigation-img" />
                                    <span className="menu__navigation-text">{item.title}</span>
                                </Link>
                            </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </section>
    )
}
export default Menu