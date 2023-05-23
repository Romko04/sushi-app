import React from 'react';
import './scss/app.scss';
import Header from './components/header/Header';
import Footer from './components/footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
