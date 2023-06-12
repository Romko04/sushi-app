import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { ProductsType } from "../types/types";
import { setProduct } from "../redux/slices/BasketSlice";
import { Link } from "react-router-dom";


const ProductCard:React.FC<ProductsType & {typeProduct:string}> = ({name,image,description,price,id,typeProduct}) => {
    const dispatch:AppDispatch = useDispatch()
    const handleClick=() => {      
        dispatch(setProduct({name,image,description,price,id,counter:1, typeProduct}))
    }
    return (
        <div className=" product__card">
            <Link to={''+id} className="swiper__slide-img product__card-img">
                <img src={image} alt="product" />
            </Link>
            <div className="product__card-content">
                <Link className="product__content-link" to={'' + id}>
                <h4 className="product__card-title">{name}</h4>
                </Link>
                <div className="product__card-text">
                    {description.map((item,index)=><span key={index}>{item}</span>)}
                </div>
                <div className="product__card-content-bottom">
                    <button onClick={handleClick} className="button product__card-btn">В корзину</button>
                    <span className="product__card-price">{price}₴</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
