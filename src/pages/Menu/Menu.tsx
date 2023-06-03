import React from "react"
import Product from '../../assets/img/menupage/menuimg.jpg'
const Menu = () => {
    return (
        <section className="menu">
            <div className="menu__container">
                <h2 className="title menu__title">Меню</h2>
                <nav className="menu__navigation">
                    <ul className="menu__navigation-list">
                        <li className="menu__navigation-item">
                            <a href="./sety.html" className="menu__navigation-link">
                                <img src={Product} alt="Сети" className="menu__navigation-img" />
                                <span className="menu__navigation-text">Сети</span>
                            </a>
                        </li>
                        <li className="menu__navigation-item">
                            <a href="./sety.html" className="menu__navigation-link">
                                <img src={Product} alt="Сети" className="menu__navigation-img" />
                                <span className="menu__navigation-text">Сети</span>
                            </a>
                        </li>
                        <li className="menu__navigation-item">
                            <a href="./sety.html" className="menu__navigation-link">
                                <img src={Product} alt="Сети" className="menu__navigation-img" />
                                <span className="menu__navigation-text">Сети</span>
                            </a>
                        </li>
                        <li className="menu__navigation-item">
                            <a href="./sety.html" className="menu__navigation-link">
                                <img src={Product} alt="Сети" className="menu__navigation-img" />
                                <span className="menu__navigation-text">Сети</span>
                            </a>
                        </li>
                        <li className="menu__navigation-item">
                            <a href="./sety.html" className="menu__navigation-link">
                                <img src={Product} alt="Сети" className="menu__navigation-img" />
                                <span className="menu__navigation-text">Сети</span>
                            </a>
                        </li>
                        <li className="menu__navigation-item">
                            <a href="./sety.html" className="menu__navigation-link">
                                <img src={Product} alt="Сети" className="menu__navigation-img" />
                                <span className="menu__navigation-text">Сети</span>
                            </a>
                        </li>
                        <li className="menu__navigation-item">
                            <a href="./sety.html" className="menu__navigation-link">
                                <img src={Product} alt="Сети" className="menu__navigation-img" />
                                <span className="menu__navigation-text">Сети</span>
                            </a>
                        </li>
                        <li className="menu__navigation-item">
                            <a href="./sety.html" className="menu__navigation-link">
                                <img src={Product} alt="Сети" className="menu__navigation-img" />
                                <span className="menu__navigation-text">Сети</span>
                            </a>
                        </li>
                        <li className="menu__navigation-item">
                            <a href="./sety.html" className="menu__navigation-link">
                                <img src={Product} alt="Сети" className="menu__navigation-img" />
                                <span className="menu__navigation-text">Сети</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}
export default Menu