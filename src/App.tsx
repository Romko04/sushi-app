import './scss/app.scss';
import Header from './components/header/Header';
import Footer from './components/footer';
import Home from './pages/Home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import Basket from './pages//Basket/Basket';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs';
import { locationType } from './types/types';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductPage from './pages/ProductPage/ProductPage';
import AboutUs from './pages/aboutUs/AboutUs';
import ShippingPage from './pages/Shipping/Shipping';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import AuthModal from './components/Modal/MobileModal/AuthModal/AuthModal';

const App = () => {
  const location: locationType = useLocation()
  const {isOpenModal} = useSelector((state:RootState)=>state.products)
  const links = location.pathname.split('/').filter(i => i !== '')
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="content">
          {links.length > 0 && <BreadCrumbs />}
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/basket' element={<Basket />} />
            <Route path="/menu/:breakpoint" element={<ProductsPage />} />
            <Route path="/menu/:breakpoint/:id?" element={<ProductPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/shipping" element={<ShippingPage />} />
          </Routes>
          {
            isOpenModal && <AuthModal />
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
