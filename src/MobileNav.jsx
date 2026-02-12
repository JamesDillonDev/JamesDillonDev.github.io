
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './MobileNav.css';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="mobile-nav-toggle" onClick={() => setOpen(!open)} aria-label="Open navigation menu">
        <span className="mobile-nav-hamburger" />
      </button>
      <nav className={`mobile-nav-drawer${open ? ' open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/work" onClick={() => setOpen(false)}>Work</Link></li>
          <li><Link to="/design" onClick={() => setOpen(false)}>Design</Link></li>
          <li><Link to="/software" onClick={() => setOpen(false)}>Software</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
        <div className="mobile-nav-socials">
          <a href="https://github.com/JamesDillonDev" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ color: '#fff', fontSize: '1.6rem', marginRight: 18 }}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/james-dillon-6b3121368/" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: '#fff', fontSize: '1.6rem', marginRight: 18 }}>
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/james.dillon15" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ color: '#fff', fontSize: '1.6rem' }}>
            <FaInstagram />
          </a>
        </div>
      </nav>
      {open && <div className="mobile-nav-backdrop" onClick={() => setOpen(false)} />}
    </>
  );
}
