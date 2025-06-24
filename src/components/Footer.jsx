import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-5 mt-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'} border-top`}>
      <Container>
        <Row className="gy-4">
          <Col lg={4}>
            <h5 className="fw-bold text-primary mb-3">📰 NewsStream</h5>
            <p className={`text-${theme === 'dark' ? 'light' : 'muted'}`}>
              Your trusted source for the latest news and updates from around the world. 
              Stay informed with our comprehensive coverage across multiple categories.
            </p>
            <div className="social-links">
              <Button variant="outline-primary" size="sm" className="me-2 mb-2">
                📧 Newsletter
              </Button>
              <Button variant="outline-primary" size="sm" className="me-2 mb-2">
                🐦 Twitter
              </Button>
              <Button variant="outline-primary" size="sm" className="mb-2">
                📘 Facebook
              </Button>
            </div>
          </Col>
          
          <Col lg={2} md={6}>
            <h6 className="fw-bold mb-3">Categories</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link 
                  to="/category/technology" 
                  className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'} hover-text-primary`}
                >
                  Technology
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/category/sports" 
                  className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'} hover-text-primary`}
                >
                  Sports
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/category/business" 
                  className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'} hover-text-primary`}
                >
                  Business
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/category/health" 
                  className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'} hover-text-primary`}
                >
                  Health
                </Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={2} md={6}>
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link 
                  to="/" 
                  className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'} hover-text-primary`}
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="/feedback" 
                  className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'} hover-text-primary`}
                >
                  Feedback
                </Link>
              </li>
              <li className="mb-2">
                <a 
                  href="#about" 
                  className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'} hover-text-primary`}
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#contact" 
                  className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'} hover-text-primary`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          
          <Col lg={4}>
            <h6 className="fw-bold mb-3">Stay Updated</h6>
            <p className={`text-${theme === 'dark' ? 'light' : 'muted'} mb-3`}>
              Get the latest news delivered to your inbox. Subscribe to our newsletter!
            </p>
            <div className="newsletter-signup">
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className={`form-control ${theme === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}
                  placeholder="Enter your email"
                />
                <Button variant="primary">Subscribe</Button>
              </div>
            </div>
          </Col>
        </Row>
        
        <hr className={`my-4 ${theme === 'dark' ? 'border-secondary' : ''}`} />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className={`mb-0 text-${theme === 'dark' ? 'light' : 'muted'}`}>
              © {currentYear} NewsStream. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <small className={`text-${theme === 'dark' ? 'light' : 'muted'}`}>
              <a 
                href="#privacy" 
                className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'} me-3`}
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'} me-3`}
              >
                Terms of Service
              </a>
              <span>Made with ❤️ for news lovers</span>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
