import React from "react"
import ProductCard from "../../components/ProductCard"
const Sety = () => {
    const obj = {
        linkImg: "https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/C6059261-F02A-11ED-B6E4-C56D23A0DC64-1969%D1%851100_0000_%D0%A1%D0%B5%D1%82-%D0%A5%D0%BE%D0%BA%D0%BA%D1%83-+-%D0%9A%D0%B0%D0%BB%D1%96%D1%84%D0%BE%D1%80%D0%BD%D1%96%D1%8F-%D0%B7-%D0%BA%D1%80%D0%B5%D0%B2%D0%B5%D1%82%D0%BA%D0%BE%D1%8E-%D0%B2-%D0%BA%D1%83%D0%BD%D0%B6%D1%83%D1%82%D1%96.png?alt=media&token=2d00c556-7996-46c6-9570-81a91aed7bf6&w=800&format=webp&mode=fit&q=60",
        title: "Великий сет",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 200
    }
    return (
        <section className="sety">
            <div className="container">
                <div className="sety__content-text content-text">
                    <h2 className="title sety__title">
                        Сеты
                    </h2>
                    <span>Cортировка</span>
                </div>
                <div className="sety__content">
                    <ProductCard {...obj} />
                </div>
            </div>
        </section>
    )
}
export default Sety