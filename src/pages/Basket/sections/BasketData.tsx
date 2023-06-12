const BasketData = () => {
    return (
        <section className="data">
            <h4 className="data__title">Ваши данные</h4>
            <form className="data--form">
                <label className="data--label">
                    <input className="data--input data__form-input" type="text" value="Андрей Новаторов" />
                    Ваше имя
                </label>
                <label className="data--label">
                    <input className="data--input data__form-input" type="text" value="48 322 32 32" />
                    Номер телефона
                </label>
                <label className="data--label ">
                    <textarea className="data--input data__form-textarea--comments">Не добавляйте соевый соус, у меня алергия</textarea>
                    Ваш комментарий
                </label>
            </form>
        </section>
    )
}
export default BasketData