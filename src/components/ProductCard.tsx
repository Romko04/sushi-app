import { SetsType } from "../types/types";


const ProductCard:React.FC<SetsType> = ({name,image,description,price}) => {
    return (
        <div className=" product__card">
            <a href="./product.html" className="swiper__slide-img product__card-img">
                <img src={image} alt="product" />
            </a>
            <div className="product__card-content">
                <h4 className="product__card-title">{name}</h4>
                <div className="product__card-text">
                    {description.map((item,index)=><span>{item}</span>)}
                </div>
                <div className="product__card-content-bottom">
                    <button className="button product__card-btn">В корзину</button>
                    <span className="product__card-price">{price}₴</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
