import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

const AboutUs = () => {
    const {languages,language} = useSelector((state:RootState)=>state.languages)

    return (
        <section className="aboutUs">
            <div className="container">
                <h2 className="title aboutUs__title-page">{languages[language]['aboutUs__title-page']}</h2>
                <p className="aboutUs__text aboutUs__text-page">
                    {languages[language]['aboutUs__text-page']}
                </p>
            </div>
        </section>
    )
}
export default AboutUs