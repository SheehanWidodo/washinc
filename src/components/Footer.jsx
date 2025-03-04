// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      © {new Date().getFullYear()} WASHINC. Jalan Jaksa Agung Suprapto 5 Malang. 0813-9392-0813
    </footer>
  );
}

export default Footer;
