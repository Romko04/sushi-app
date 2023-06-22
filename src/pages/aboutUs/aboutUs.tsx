import { useTranslation } from "react-i18next"

const AboutUs = () => {
    const {t}=useTranslation()
    return (
        <section className="aboutUs">
            <div className="container">
                <h2 className="title aboutUs__title-page">{t('aboutUs__title-page')}</h2>
                <p className="aboutUs__text aboutUs__text-page">
                    {t('aboutUs__text-page')}
                </p>
            </div>
        </section>
    )
}
export default AboutUs