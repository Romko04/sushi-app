import { useLocation } from "react-router"
import React from "react"
import styles from './breadCrumps.module.css'
import { Link } from "react-router-dom"
import { locationType } from "../../types/types"
import { ReactComponent as Arrow } from "./img/arrowmenu.svg"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { useTranslation } from "react-i18next"
const BreadCrumbs = () => {
    const { t } = useTranslation();
    const {language} = useSelector((state:RootState)=> state.products)
    const location: locationType = useLocation()
    const links = location.pathname.split('/').filter(i => i !== '')
    const { products } = useSelector((state: RootState) => state.products)
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <section className={styles.breadCrumbs}>
            <div className="container">
                <nav className={styles.nav}>
                    <button onClick={handleGoBack} className={styles.button}>
                        <Arrow className={styles.arrow} />
                    </button>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link className={styles.link} to={'/'}>{t('home')}</Link>
                        </li>
                        {
                            links.map((item, index) => {
                                return (
                                    !isNaN(+item) ? (
                                        <li key={index} className={styles.item}>
                                            <span className={styles.link}>{
                                                    products.find(product => product.id === +item )?.name[language]
                                            }</span>
                                        </li>
                                    ) : (
                                        <li key={index} className={styles.item}>
                                            {links.length - 1 === index ? (
                                                <span className={styles.link}>{t(item)}</span>
                                            ) : (
                                                <Link className={styles.link} to={item === 'menu'?'menu/':`menu/${item}`}>{t(item)}</Link>
                                            )}
                                        </li>
                                    )
                                );
                            })
                        }
                    </ul>
                </nav>
            </div>
        </section>


    )
}
export default BreadCrumbs
