import { Link } from 'gatsby';
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="sticky">
      <button className="nav-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/">Hem</Link>
        <Link to="/about">Om oss</Link>
        <Link to="/blog">Blogg</Link>
        <Link to="/companys">Företag</Link>
        <Link to="/private">Privat</Link>
      </div>
    </nav>
  );
}
