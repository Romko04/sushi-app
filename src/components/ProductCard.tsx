interface ProductCardPropsType {
    linkImg: string,
    title: string,
    text: string,
    price: number
}
const ProductCard:React.FC<ProductCardPropsType> = ({title,linkImg,text,price}) => {
    return (
        <div className=" product__card">
            <a href="./product.html" className="swiper__slide-img product__card-img">
                <img src={linkImg} alt="product" />
            </a>
            <div className="product__card-content">
                <h4 className="product__card-title">{title}</h4>
                <p className="product__card-text">
                    {text}
                </p>
                <div className="product__card-content-bottom">
                    <button className="button product__card-btn">В корзину</button>
                    <span className="product__card-price">{price}</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
