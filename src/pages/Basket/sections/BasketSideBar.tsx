import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { useEffect, useState } from "react"

const BasketSideBar = () => {
    const {products,totalCount} = useSelector((state:RootState)=>state.basket)
    const [totalPrice,setTotalCount] = useState<number>(0)
    useEffect(()=>{
        const price = products.reduce((totalPrice,currentItem)=>{
            return totalPrice + (currentItem.counter * currentItem.price)
        },0)
        setTotalCount(price)
    },[products])
    return (
        <aside className="sidebar">
        <div className="sidebar__container">
            <h3 className="sidebar__title">Стоимость</h3>
            <nav className="sidebar__check">
                <ul className="sidebar__check-list">
                    <li className="sidebar__check-item">
                        <span className="sidebar__check-item__price">Цена</span>
                        <span className="sidebar__check-item__value price">{totalPrice.toFixed(2)}₴</span>
                    </li>
                    <li className="sidebar__check-item">
                        <span className="sidebar__check-item__price">Доставка</span>
                        <span className="sidebar__check-item__value price">25,00 ₴</span>
                    </li>
                </ul>
            </nav>
            <div className="sidebar__check-result">
                <span className="sidebar__check-result-text">Всего</span>
                <span className="sidebar__check-result-text price">{Number(totalPrice + 25).toFixed(2)} ₴</span>
            </div>
            <button className="button sidebar__check-btn">Перейти к оплате</button>
        </div>
    </aside>
    )
}
export default BasketSideBar