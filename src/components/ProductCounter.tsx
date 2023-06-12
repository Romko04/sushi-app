import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { ReactComponent as Minus } from '../pages/ProductPage/img/minus.svg';
import { ReactComponent as Plus } from '../pages/ProductPage/img/plus.svg';
import { ProductsBasketType } from '../types/types';
import { deincrementProduct, incrementProduct, setProduct } from '../redux/slices/BasketSlice';
interface ProductCounter {
    product: ProductsBasketType | undefined
    findBasketProuduct: ProductsBasketType | undefined
}
const ProductCounter:React.FC<ProductCounter> = ({product,findBasketProuduct}) => {
    const dispatch:AppDispatch = useDispatch()
    const setProductHandleClick=() => {
        if (product) {
            dispatch(setProduct({...product,counter:1}))
        }
    }
    const incrementhandleClick=() => {
        if (product && findBasketProuduct) {
            dispatch(incrementProduct({...product,counter:1}))
        } else {
            setProductHandleClick()
        }
    }
    const deincrementhandleClick=() => {
        if (product) {
            dispatch(deincrementProduct({...product,counter:1}))
        }
    }
    return (
        <div className="product__buttons">
            <div className="product__counter">
                <button onClick={deincrementhandleClick} className="button product__counter-btn btn--plus">
                    <Minus />
                </button>
                <span className="product__counter-value">{findBasketProuduct?.counter || 0}</span>
                <button onClick={incrementhandleClick} className="button product__counter-btn btn--plus">
                    <Plus />
                </button>
            </div>
            <div className="product__order">
                <button onClick={setProductHandleClick} className="button product__order-btn">
                    Добавить в корзину
                </button>
                <span className="product__order-price">{product?.price}₴</span>
            </div>
        </div>
    )
}
export default ProductCounter