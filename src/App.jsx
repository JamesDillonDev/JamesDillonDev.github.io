

import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Physical from './pages/Physical.jsx';
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
              <Nav.Link as={Link} to="/physical">Physical</Nav.Link>
              <Nav.Link as={Link} to="/software">Software</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div style={{ marginTop: '4.5rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/physical" element={<Physical />} />
          <Route path="/software" element={<Software />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
