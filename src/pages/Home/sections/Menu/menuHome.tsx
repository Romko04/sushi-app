import Sets from './img/sets.svg'
import Fhiladelphia from './img/philadelphia.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
type menuItem = {
    img:string
    value: string
}
  
  const menuList: menuItem[] = [
    { img: Sets, value: 'sets' },
    { img: Fhiladelphia, value: 'philadelphia' },
  ];
const MenuHome = () => {
    const {languages,language} = useSelector((state:RootState)=>state.languages)
    return (
        <section className="menu">
            <div className="container">
                <div className="menu__content-text content-text">
                    <h2 className="title menu__title">
                        {languages[language]['menu__title']}
                    </h2>
                    <span className="menu__subtitle subtitle">{languages[language]['menu__subtitle']}</span>
                </div>
                <div className="menu__content">
                    <nav className="menu__navigation">
                        <ul className="menu__navigation-list">
                            {menuList.map((item, index: number) => {
                                return (
                                    <li key={index} className="menu__navigation-item">
                                        <Link to={`/menu/${item.value}`} className="menu__navigaton-link">
                                            <img src={item.img} alt="" className="menu__navigaton-img" />
                                            <span className={`menu__navigation-img__title ${item.value === 'menu'&& 'menu__navigation-img__title--menu'} `}>{languages[language][item.value]}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

    )
}
export default MenuHome
