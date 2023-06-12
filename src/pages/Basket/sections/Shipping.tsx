const Shipping = () => {
    return (
        <section className="shipping">
            <div className="shipping__types">
                <span className="shipping__type shipping__type-left shipping__type-active--type">Доставка</span>
                <span className="shipping__type shipping__type-right">Самовывоз</span>
            </div>
            <form className="data--form">
                <label className="data--label">
                    <input className="data--input shipping__input" type="text" placeholder="Введите ваш адрес" />
                    Адрес
                </label>
                <label className="data--label">
                    <input className="data--input shipping__input" type="text" placeholder="Введите номер подъзда" />
                    Подъезд
                </label>
                <label className="data--label">
                    <input className="data--input shipping__input" type="text" placeholder="Введите номер квартиры" />
                    Квартира
                </label>
                <label className="data--label">
                    <input className="data--input shipping__input" type="text" placeholder="Введите ваш этаж" />
                    Этаж
                </label>
            </form>
        </section>
    )
}
export default Shipping