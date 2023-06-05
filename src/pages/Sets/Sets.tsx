import React, { useEffect } from "react"
import ProductCard from "../../components/ProductCard"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchSets } from "../../redux/slices/SetySlice";
import { AppDispatch } from "../../redux/store";
const Sety:React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const { sety } = useSelector((state: RootState) => state.sety)
    useEffect(() => {
        dispatch(fetchSets())
    }, [])
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
                    {sety.length > 1 && sety.map((item, index: number) => <ProductCard {...item} />)}

                </div>
            </div>
        </section>
    )
}
export default Sety