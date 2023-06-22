import React from "react"
import {ReactComponent as User} from '../../icons/headerMobile/user.svg'
import {ReactComponent as Phone} from '../../icons/headerMobile/phone.svg'
import {ReactComponent as Location} from '../../icons/headerMobile/location.svg'
import {ReactComponent as Basket} from '../../icons/headerMobile/basket.svg'
import styles from './NavigationMobile.module.css'
import { componentsLystType } from "../../../../types/types"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import { Link } from "react-router-dom"
const NavigationMobile = () => {
    const {totalCount} = useSelector((state:RootState)=>state.basket)
    const linksLyst:componentsLystType[] = [
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
                        <li key={index} className={styles.item} ><Link className=""  to={`${item.link}`}>{item.component}</Link></li>
                    )
                })}
                <span className={styles.basketValue}>{totalCount}</span>
            </ul>
        </nav>
    )
}
export default NavigationMobile