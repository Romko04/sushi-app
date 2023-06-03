import React, { ReactElement } from "react"
import {ReactComponent as User} from '../../icons/headerMobile/user.svg'
import {ReactComponent as Phone} from '../../icons/headerMobile/phone.svg'
import {ReactComponent as Location} from '../../icons/headerMobile/location.svg'
import {ReactComponent as Basket} from '../../icons/headerMobile/basket.svg'

import styles from './NavigationMobile.module.css'
const NavigationMobile = () => {
    type linkLystType= {
        component: ReactElement, link: string
    }
    const linksLyst:linkLystType[] = [
        {component: <Phone />, link:"user"},
        {component: <Location/>, link:"phone"},
        {component: <Basket/>, link:"location"},
        {component: <User/>, link:"basket"},
        
        ]
    return (
        <nav>
            <ul className={styles.list} >
                {linksLyst.map((item,index)=>{
                    return (
                        <li key={index} className={styles.item} ><a className=""  href={`${item.link}`}>{item.component}</a></li>
                    )
                })}
                <span className={styles.basketValue}>12</span>
            </ul>
        </nav>
    )
}
export default NavigationMobile