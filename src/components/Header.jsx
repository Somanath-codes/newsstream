import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import SearchBar from './SearchBar';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleSearch = (query) => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Navbar 
      expand="lg" 
      className={`custom-navbar ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow-sm`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-primary">
          📰 NewsStream
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/category/technology" className="nav-link-custom">
              Technology
            </Nav.Link>
            <Nav.Link as={Link} to="/category/sports" className="nav-link-custom">
              Sports
            </Nav.Link>
            <Nav.Link as={Link} to="/category/business" className="nav-link-custom">
              Business
            </Nav.Link>
            <Nav.Link as={Link} to="/category/health" className="nav-link-custom">
              Health
            </Nav.Link>
            <Nav.Link as={Link} to="/category/entertainment" className="nav-link-custom">
              Entertainment
            </Nav.Link> */}
          </Nav>
          
          <div className="d-flex align-items-center gap-3">
            <SearchBar onSearch={handleSearch} />
            <Button
              variant={theme === 'dark' ? 'outline-light' : 'outline-dark'}
              size="sm"
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
