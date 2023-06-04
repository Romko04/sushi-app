import { useLocation } from "react-router"
import React from "react"
import styles from './breadCrumps.module.css'
import { Link } from "react-router-dom"
import { locationType } from "../../types/types"
import { ReactComponent as Arrow } from "./img/arrowmenu.svg"
const BreadCrumbs = () => {

    const location: locationType = useLocation()
    const links = location.pathname.split('/')
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
                            <Link className={styles.link} to={'/'}>Home</Link>
                        </li>
                        {
                            links.filter(i => i !== '')
                                .map((item, index) => {
                                    return (
                                        <li key={index} className={styles.item}>
                                            <Link className={styles.link} to={`/${item}`}>{item}</Link>
                                        </li>
                                    )
                                })
                        }
                    </ul>
                </nav>
            </div>
        </section>


    )
}
export default BreadCrumbs