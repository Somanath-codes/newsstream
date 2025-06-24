import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const NotFound = () => {
  const { theme } = useTheme();

  return (
    <Container className="py-5" style={{ marginTop: '80px', minHeight: '60vh' }}>
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <Card className={`border-0 shadow-sm ${theme === 'dark' ? 'bg-dark text-light' : ''}`}>
            <Card.Body className="p-5">
              <div className="mb-4">
                <span style={{ fontSize: '6rem' }}>🔍</span>
              </div>
              
              <h1 className={`display-6 fw-bold text-${theme === 'dark' ? 'light' : 'dark'} mb-3`}>
                404 - Page Not Found
              </h1>
              
              <p className={`lead text-${theme === 'dark' ? 'light' : 'muted'} mb-4`}>
                Oops! The page you're looking for doesn't exist. It might have been moved, 
                deleted, or you entered the wrong URL.
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button 
                  as={Link} 
                  to="/" 
                  variant="primary" 
                  size="lg"
                  className="fw-bold"
                >
                  🏠 Go Home
                </Button>
                
                <Button 
                  as={Link} 
                  to="/search" 
                  variant="outline-primary" 
                  size="lg"
                >
                  🔍 Search News
                </Button>
              </div>
              
              <hr className={`my-4 ${theme === 'dark' ? 'border-secondary' : ''}`} />
              
              <div className="row text-start">
                <div className="col-sm-6 mb-3">
                  <h6 className={`fw-bold text-${theme === 'dark' ? 'light' : 'dark'}`}>
                    Popular Categories
                  </h6>
                  <ul className="list-unstyled">
                    <li>
                      <Link 
                        to="/category/technology" 
                        className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'}`}
                      >
                        💻 Technology
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/category/sports" 
                        className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'}`}
                      >
                        ⚽ Sports
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/category/business" 
                        className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'}`}
                      >
                        💼 Business
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div className="col-sm-6 mb-3">
                  <h6 className={`fw-bold text-${theme === 'dark' ? 'light' : 'dark'}`}>
                    Quick Links
                  </h6>
                  <ul className="list-unstyled">
                    <li>
                      <Link 
                        to="/feedback" 
                        className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'}`}
                      >
                        📝 Feedback
                      </Link>
                    </li>
                    <li>
                      <a 
                        href="#contact" 
                        className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'}`}
                      >
                        📧 Contact Us
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#help" 
                        className={`text-decoration-none text-${theme === 'dark' ? 'light' : 'muted'}`}
                      >
                        ❓ Help Center
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
