import React from "react"
import {ReactComponent as User} from '../icons/headerMobile/user.svg'
import {ReactComponent as Phone} from '../icons/headerMobile/phone.svg'
import {ReactComponent as Location} from '../icons/headerMobile/location.svg'
import {ReactComponent as Basket} from '../icons/headerMobile/basket.svg'

import styles from './NavigationMobile.module.css'
const NavigationMobile = () => {
    const navigationList: React.ReactElement[] = [<User />, <Phone />,<Location />,<Basket/>];
    return (
        <nav>
            <ul className={styles.list} >
                {navigationList.map((item,index)=>{
                    return (
                        <li className={styles.item} ><a className=""  href="#home">{item}</a></li>
                    )
                })}
                <span className={styles.basketValue}>12</span>
            </ul>
        </nav>
    )
}
export default NavigationMobile