
import Sets from './img/sets.svg'
import Fhiladelphia from './img/philadelphia.svg'
import Futumaki from './img/futumaki.svg'
import Salats from './img/salats.svg'
import Drinks from './img/Drinks.svg'
import Sauce from './img/sauce.svg'
import Menu from './img/inMenu.svg'


import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
type menuItem = {
    img:string
    value: string
}
  
  const menuList: menuItem[] = [
    { img: Sets, value: 'sets' },
    { img: Fhiladelphia, value: 'philadelphia' },
  ];
const MenuHome = () => {
    const {t} = useTranslation()
    return (
        <section className="menu">
            <div className="container">
                <div className="menu__content-text content-text">
                    <h2 className="title menu__title">
                        {t("menu__title")}
                    </h2>
                    <span className="menu__subtitle subtitle">{t("menu__subtitle")}</span>
                </div>
                <div className="menu__content">
                    <nav className="menu__navigation">
                        <ul className="menu__navigation-list">
                            {menuList.map((item, index: number) => {
                                
                                return (
                                    <li key={index} className="menu__navigation-item">
                                        <Link to={`/menu/${item.value}`} className="menu__navigaton-link">
                                            <img src={item.img} alt="" className="menu__navigaton-img" />
                                            <span className={`menu__navigation-img__title ${item.value === 'menu'&& 'menu__navigation-img__title--menu'} `}>{t(item.value)}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

    )
}
export default MenuHome
