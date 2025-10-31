import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/home";
import Menu from "./pages/Menu/menu";
import "./App.css";

function App() {
  return (
    <Router>
      {/* NAVBAR */}
      <header className="navbar">
        {/* Left side: Logo */}
        <div className="logo-container">
          <img src="/logo.jpg" alt="Restaurant Logo" className="nav-logo" />
          <h1 className="brand-name">Bon Ton</h1>
        </div>

        {/* Center: Navigation Links */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/visit">Visit Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/review">Review</Link>
        </nav>

        {/* Right side: Button */}
        <button className="book-btn">Book a Table</button>
      </header>

      {/* MAIN PAGE CONTENT */}
      <main className="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;