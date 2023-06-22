import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { ProductsType } from "../types/types";
import { setProduct } from "../redux/slices/BasketSlice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ProductCard:React.FC<ProductsType & {typeProduct:string}> = (product) => {   
    const {t} = useTranslation()
    const {language} = useSelector((state:RootState)=>state.products)
    const dispatch:AppDispatch = useDispatch()
    const handleClick=() => {  
        dispatch(setProduct({
            description: {...product.description},
            id:product.id,
            name: product.name,
            rating: product.rating,
            price:product.price,
            counter: 1,
            typeProduct: product.typeProduct,
            image: product.image
        }))
    }
    return (
        <div className=" product__card">
            <Link to={`/menu/${product.typeProduct+'/'+product.id}`} className="swiper__slide-img product__card-img">
                <img src={product.image} alt="product" />
            </Link>
            <div className="product__card-content">
                <Link className="product__content-link" to={`/menu/${product.typeProduct+'/'+product.id}`}>
                <h4 className="product__card-title">{product.name[language]}</h4>
                </Link>
                <div className="product__card-text">
                    {product.description[language].map((item,index)=><span key={index}>{item}</span>)}
                </div>
                <div className="product__card-content-bottom">
                    <button onClick={handleClick} className="button product__card-btn">{t('inBasket')}</button>
                    <span className="product__card-price">{product.price}₴</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
