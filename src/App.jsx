import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/home';
import Menu from './pages/Menu/menu';
import Checkout from './pages/Checkout/checkout';
import Confirmation from './pages/Checkout/confirmation';
import './App.css';

function App() {
  return (
    <Router>
      <header className="p-4 bg-white shadow">
        <nav className="container mx-auto flex gap-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link to="/menu" className="text-blue-600 hover:underline">
            Menu
          </Link>
          <Link to="/checkout" className="text-blue-600 hover:underline">
            checkout
          </Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
