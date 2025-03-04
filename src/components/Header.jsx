// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-teal-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">WASHINC</h1>
        <nav>
          <Link className="px-2" to="/">Home</Link>
          <Link className="px-2" to="/about">About</Link>
          <Link className="px-2" to="/contact">Contact</Link>
          <Link className="px-2" to="/shoe-progress">Shoe Progress</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
