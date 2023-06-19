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
import { useTranslation } from "react-i18next"
const Menu:React.FC = () => {
    const {t} = useTranslation()
    const menuList:linksLystType[] = [
        {title:'Сеты ', linkImg: Sety, value: 'sets'},
        {title:'Філадельфія', linkImg: Hosonaki, value: 'philadelphia'},
        {title:'Урумаки', linkImg: Urumaki, value: 'futumaki'},
        {title:'Салати', linkImg: Salats, value: 'salats'},
        {title:'Напитки', linkImg: Drinks, value: 'drinks'},
        {title:'Соусы', linkImg: Sousy, value: 'sauce'},
    ]
    return (
        <section className="menu">
            <div className="menu__container">
                <h2 className="title menu__title">{t('menu')}</h2>
                <nav className="menu__navigation">
                    <ul className="menu__navigation-list__home">
                        {menuList.map((item,index)=>{
                            return (
                                <li key={index} className="menu__navigation-item">
                                <Link to={`${item.value}`} className="menu__navigation-link">
                                    <img src={item.linkImg} alt="Сети" className="menu__navigation-img" />
                                    <span className="menu__navigation-text">{t(item.value)}</span>
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