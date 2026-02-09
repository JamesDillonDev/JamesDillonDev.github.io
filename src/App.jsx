
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';

// Ensure Google Fonts for 'Roboto Mono' are loaded
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css?family=Roboto+Mono:700&display=swap';
document.head.appendChild(fontLink);

export default function App() {
  return (
    <div className="top-header">
      <Navbar bg="dark" variant="dark" expand="md" className="nav-bar">
        <Container className="d-flex justify-content-between align-items-center">
          <h1 className="site-title mb-0">James Dillon.</h1>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#physical">Physical</Nav.Link>
            <Nav.Link href="#software">Software</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
