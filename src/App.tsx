import React from 'react';
import './scss/app.scss';
import Header from './components/header/Header';
import Footer from './components/footer';
import Home from './pages/Home/Home';
import Sidebar from './components/sidebar/sidebar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import Basket from './pages/Basket/Home';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs';
import { locationType } from './types/types';
import Sety from './pages/Sety/Sety';

const  App =()=> {
  const location:locationType = useLocation()
  const links = location.pathname.split('/').filter(i => i!=='')
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Sidebar />
        <div className="content">
          {links.length > 0 &&<BreadCrumbs />}
          <Routes>
            <Route path='/' Component={Home}  />
            <Route path='/menu' Component={Menu}  />
            <Route path='/basket' Component={Basket}  />
            <Route path='/sety' Component={Sety}  />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
