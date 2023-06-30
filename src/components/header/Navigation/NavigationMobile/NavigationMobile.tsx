import React, { useEffect, useState } from "react"
import { ReactComponent as User } from '../../icons/headerMobile/user.svg'
import { ReactComponent as Phone } from '../../icons/headerMobile/phone.svg'
import { ReactComponent as Location } from '../../icons/headerMobile/location.svg'
import { ReactComponent as Basket } from '../../icons/headerMobile/basketMobile.svg'
import styles from './NavigationMobile.module.css'
import { DropdownOptionsType, componentsLystType } from "../../../../types/types"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../../redux/store"
import { Link } from "react-router-dom"
import MobileModal from "../../../Modal/MobileModal/MobileModal"
import { setisOpenModal } from "../../../../redux/slices/ProductsSlice"
const NavigationMobile = () => {
    const dispatch: AppDispatch = useDispatch()
    const {language} = useSelector((state:RootState)=>state.languages)
    const modals: DropdownOptionsType = {
        numbers: ['48 696 84 31 31', '48 636 44 31 31', '42 696 84 32 33'],
        cities: ['kyiev', 'london'],
        languages: ['UA', 'EN']
    }
    const linksLyst: componentsLystType[] = [
        { value: 'languages', link: language},
        { component: <User />, link: "user" },
        { component: <Phone />, link: "phone", value: 'numbers' },
        { component: <Location />, link: "location",value:'cities'},
        { component: <Basket />, link: "basket" },
    ]
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedTypeModal, setSelectedTypeModal] = useState<"cities" | "numbers" | "languages" | null>(null);
    useEffect(() => {
        isOpen?document.body.classList.add('no-scroll'):document.body.classList.remove('no-scroll');
      }, [isOpen]);
      
    const openModal = (e:React.MouseEvent<HTMLLIElement>,value:string,link:string) => {
        if (link === 'user') {
            e.preventDefault()
            dispatch(setisOpenModal())
            return
      }
        if (value !== 'cities' && value !== 'numbers' && value !== 'languages') {
            return
        }

        e.preventDefault()
        setSelectedTypeModal(value)
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const { totalCount } = useSelector((state: RootState) => state.basket)
    return (
        <>
            <nav>
                <ul className={styles.list} >
                    {linksLyst.map((item, index) => {
                        return (
                            <li key={index} className={styles.item} onClick={(e)=> openModal(e,item.value as string,item.link)} >
                                {item.value !== 'cities' && item.value !== 'numbers' && item.value !== 'languages' && item.link !=='user'?<Link to={item.link}>{item.component}</Link>: <a className={styles.link} href="#">{item.component || item.link}</a>}
                            </li>
                        )
                    })}
                    <span className={styles.basketValue}>{totalCount}</span>
                </ul>
            </nav>
            {
                isOpen && selectedTypeModal &&
                <MobileModal type={selectedTypeModal} children={selectedTypeModal&&modals[selectedTypeModal]} closeModal={closeModal}/>
            }
        </>
    )
}
export default NavigationMobile