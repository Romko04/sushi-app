import React from "react"
import Urumak from '../../../../assets/img/home/menu/urumaki2.svg'
import Futumaki from '../../../../assets/img/home/menu/futumaki3.svg'
import Hosomaki from '../../../../assets/img/home/menu/hosomaki4.svg'
import Nigiri from '../../../../assets/img/home/menu/nigiri5.svg'
import Springroly from '../../../../assets/img/home/menu/springroly6.svg'
import Tartary from '../../../../assets/img/home/menu/tartary7.svg'
import Salat from '../../../../assets/img/home/menu/salat8.svg'
import Salats from '../../../../assets/img/home/menu/salats9.svg'
import Sousy from '../../../../assets/img/home/menu/sousy10.svg'
import Drinks from '../../../../assets/img/home/menu/drinks11.svg'
import Additionally from '../../../../assets/img/home/menu/Additionally12.svg'
const menuList:string[] = [
    Urumak,
    Futumaki,
    Hosomaki,
    Nigiri,
    Springroly,
    Tartary,
    Salat,
    Salats,
    Sousy,
    Drinks,
    Additionally
]
const MenuHome = () => {
    return (
        <section className="menu">
            <div className="container">
                <div className="menu__content-text content-text">
                    <h2 className="title menu__title">
                        Откройте для себя новые вкусы
                    </h2>
                    <span className="menu__subtitle subtitle">Созданные нами с любовью и заботой</span>
                </div>
                <div className="menu__content">
                    <nav className="menu__navigation">
                        <ul className="menu__navigation-list">
                            {menuList.map((src,index:number)=>{
                                return (
                                    <li key={index} className="menu__navigaton-item">
                                    <a href="" className="menu__navigaton-link"><img src={src} alt="" className="menu__navigaton-img" /></a>
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