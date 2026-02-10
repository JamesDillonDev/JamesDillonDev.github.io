

import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Design from './pages/Design.jsx';
import Software from './pages/Software.jsx';
import Contact from './pages/Contact.jsx';

// Ensure Google Fonts for 'Roboto Mono' are loaded
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css?family=Roboto+Mono:700&display=swap';
document.head.appendChild(fontLink);

export default function App() {
  return (
    <Router>
      <div className="top-header">
        <Navbar bg="dark" variant="dark" expand="md" className="nav-bar">
          <Container className="d-flex justify-content-between align-items-center">
            <h1 className="site-title mb-0">
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>James Dillon.</Link>
            </h1>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/design">Design</Nav.Link>
              <Nav.Link as={Link} to="/software">Software</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            <div className="social-links" style={{ display: 'flex', gap: '16px', marginLeft: '24px' }}>
              <a href="https://github.com/JamesDillonDev" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/james-dillon-6b3121368/" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/james.dillon15" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <FaInstagram />
              </a>
            </div>
          </Container>
        </Navbar>
      </div>
      <div style={{ marginTop: '4.5rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<Design />} />
          <Route path="/software" element={<Software />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
