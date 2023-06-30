import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { useEffect, useState } from "react"


const BasketSideBar = () => {
    const {languages,language} = useSelector((state:RootState)=>state.languages)
    const {products} = useSelector((state:RootState)=>state.basket)
    const [totalPrice,setTotalCount] = useState<number>(0)
    useEffect(()=>{
        const price = products.reduce((totalPrice,currentItem)=>{
            return totalPrice + (currentItem.counter * currentItem.price)
        },0)
        setTotalCount(price)
    },[products])
    return (
        <aside className="sidebar__basket">
        <div className="sidebar__container">
            <h3 className="sidebar__title">{languages[language]['sidebar__title']}</h3>
            <nav className="sidebar__check">
                <ul className="sidebar__check-list">
                    <li className="sidebar__check-item">
                        <span className="sidebar__check-item__price">{languages[language]['sidebar__check-item__price1']}</span>
                        <span className="sidebar__check-item__value price">{totalPrice.toFixed(2)}₴</span>
                    </li>
                    <li className="sidebar__check-item">
                        <span className="sidebar__check-item__price">{languages[language]['sidebar__check-item__price2']}</span>
                        <span className="sidebar__check-item__value price">25,00 ₴</span>
                    </li>
                </ul>
            </nav>
            <div className="sidebar__check-result">
                <span className="sidebar__check-result-text">{languages[language]["sidebar__check-result-text1"]}</span>
                <span className="sidebar__check-result-text price">{Number(totalPrice + 25).toFixed(2)} ₴</span>
            </div>
            <button type="submit" className="button sidebar__check-btn">{languages[language]["sidebar__check-btn"]}</button>
        </div>
    </aside>
    )
}
export default BasketSideBar
