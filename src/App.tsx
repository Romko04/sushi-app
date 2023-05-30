import React from 'react';
import './scss/app.scss';
import Header from './components/header/Header';
import Footer from './components/footer';
import Home from './pages/Home/Home';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Sidebar />
        <div className="content">
          <Home />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
