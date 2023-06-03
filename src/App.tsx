import React from 'react';
import './scss/app.scss';
import Header from './components/header/Header';
import Footer from './components/footer';
import Home from './pages/Home/Home';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import Basket from './pages/Basket/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      <main className="main">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path='/' Component={Home}  />
            <Route path='/menu' Component={Menu}  />
            <Route path='/basket' Component={Basket}  />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
