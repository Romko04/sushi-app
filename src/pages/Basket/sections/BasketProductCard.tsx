import { useDispatch } from "react-redux"
import { deincrementProduct, deleteProduct, incrementProduct } from "../../../redux/slices/BasketSlice"
import { AppDispatch } from "../../../redux/store"
import { ProductsBasketType, ProductsType } from "../../../types/types"
import { ReactComponent as Khrest } from '../img/khrest.svg'
import { ReactComponent as Minus } from '../img/minus.svg'
import { ReactComponent as Plus } from '../img/plus.svg'
import { Link } from "react-router-dom"

const BasketProductCard:React.FC<{item:ProductsBasketType & {counter:number}}> = ({item}) => {
    const dispatch:AppDispatch = useDispatch()
    const incrementhandleClick=(item:ProductsType & {counter:number}) => {
        dispatch(incrementProduct({...item}))
    }
    const deincrementhandleClick=(item:ProductsType & {counter:number}) => {
        dispatch(deincrementProduct({...item}))
    }
    const deletehandleClick=(item:ProductsType & {counter:number}) => {
        dispatch(deleteProduct({...item}))
    }
    return (
        <li className="basket__order-item">
            <Link to={`/menu/${item.typeProduct}/${item.id}`}>
                <img src={item.image} alt="basketProduct" className="basket__order-img" />
            </Link>
            <div className="basket__order-item__content">
                <div className="basket__order-item__content-top">
                    <h4 className="basket__order-item__title">{item.name}</h4>
                    <button onClick={() => deletehandleClick(item)} className="button product__counter-btn">
                        {<Khrest />}
                    </button>
                </div>
                <div className="product__order-item__content-bottom basket__order-item__content-bottom">
                    <div className="product__counter">
                        <button onClick={() => { deincrementhandleClick(item) }} className="button product__counter-btn btn--plus">
                            {<Minus />}
                        </button>
                        <span className="product__counter-value">{item.counter}</span>
                        <button onClick={() => { incrementhandleClick(item) }} className="button product__counter-btn btn--plus">
                            {<Plus />}
                        </button>
                    </div>
                    <span className="basket__order-item__price">{item.price.toFixed(2)}₴</span>
                </div>

            </div>
        </li>
    )
}
export default BasketProductCard