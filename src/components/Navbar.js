import { Link } from 'gatsby';
import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <div className="links">
        <Link to="/">Hem</Link>
        <Link to="/about">Om oss</Link>
        <Link to="/blog">Blogg</Link>
        <Link to="/companys">Företag</Link>
        <Link to="/private">Privat</Link>
      </div>
    </nav>
  );
}
