import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const CategoryNav = () => {
  const location = useLocation();
  const { theme } = useTheme();

  const categories = [
    { name: 'All News', path: '/', icon: '📰' },
    { name: 'Technology', path: '/category/technology', icon: '💻' },
    { name: 'Sports', path: '/category/sports', icon: '⚽' },
    { name: 'Business', path: '/category/business', icon: '💼' },
    { name: 'Health', path: '/category/health', icon: '🏥' },
    { name: 'Entertainment', path: '/category/entertainment', icon: '🎬' },
    { name: 'Science', path: '/category/science', icon: '🔬' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <div className={`category-nav py-3 ${theme === 'dark' ? 'bg-dark' : 'bg-light'} border-bottom`}>
      <Container>
        <Nav className="flex-nowrap overflow-auto category-nav-pills">
          {categories.map((category) => (
            <Nav.Item key={category.path} className="me-2">
              <Nav.Link
                as={Link}
                to={category.path}
                className={`
                  px-3 py-2 rounded-pill text-nowrap category-pill
                  ${isActive(category.path) 
                    ? 'bg-primary text-white' 
                    : theme === 'dark' 
                      ? 'text-light hover-bg-secondary' 
                      : 'text-dark hover-bg-light'
                  }
                `}
                style={{ 
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  border: isActive(category.path) ? 'none' : '1px solid transparent'
                }}
              >
                <span className="me-2">{category.icon}</span>
                {category.name}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
    </div>
  );
};

export default CategoryNav;
