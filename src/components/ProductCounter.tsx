import { useDispatch, useSelector  } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { ReactComponent as Minus } from '../pages/ProductPage/img/minus.svg';
import { ReactComponent as Plus } from '../pages/ProductPage/img/plus.svg';
import { ProductsBasketType, ProductsType } from '../types/types';
import { deincrementProduct, incrementProduct, setProduct } from '../redux/slices/BasketSlice';
interface ProductCounter {
    product: ProductsType 
    findBasketProuduct: ProductsBasketType | undefined
}
const ProductCounter:React.FC<ProductCounter> = ({product, findBasketProuduct}) => {
    const {typeProduct} = useSelector((state:RootState)=>state.products)
    const {languages,language} = useSelector((state:RootState)=>state.languages)
    const dispatch:AppDispatch = useDispatch()
    const setProductHandleClick=() => {
            dispatch(setProduct({...product,counter:1,typeProduct}))
    }
    const incrementhandleClick=() => {
        if (product && findBasketProuduct) {
            dispatch(incrementProduct({...product,counter:1}))
        } else {
            setProductHandleClick()
        }
    }
    const deincrementhandleClick=() => {
            dispatch(deincrementProduct({...product,counter:1}))
    }
    return (
        <div className="product__buttons">
            <div className="product__counter">
                <button onClick={deincrementhandleClick} className="button product__counter-btn btn--plus">
                    <Minus />
                </button>
                <span className="product__counter-value">{findBasketProuduct && findBasketProuduct.counter || 0}</span>
                <button onClick={incrementhandleClick} className="button product__counter-btn btn--plus">
                    <Plus />
                </button>
            </div>
            <div className="product__order">
                <button onClick={setProductHandleClick} className="button product__order-btn">
                    {languages[language]['addInBasketBtn']}
                </button>
                <span className="product__order-price">{product && product.price.toFixed(2)}₴</span>
            </div>
        </div>
    )
}
export default ProductCounter