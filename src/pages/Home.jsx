import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import NewsList from '../components/NewsList';
import CategoryNav from '../components/CategoryNav';
import { useFetchNews } from '../hooks/useFetchNews';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { news, loading, error } = useFetchNews('headlines');
  const { theme } = useTheme();

  // Get top 3 featured articles
  const featuredNews = news.slice(0, 3);
  const regularNews = news.slice(3);

  return (
    <div className="home-page">
      <CategoryNav />
      
      <Container className="py-4" style={{ marginTop: '80px' }}>
        {/* Hero Section */}
        <div className="hero-section mb-5">
          <Row className="align-items-center">
            <Col lg={8}>
              <h1 className={`display-4 fw-bold text-${theme === 'dark' ? 'light' : 'dark'} mb-3`}>
                Welcome to NewsStream 📰
              </h1>
              <p className={`lead text-${theme === 'dark' ? 'light' : 'muted'} mb-4`}>
                Stay informed with the latest news from around the world. Get breaking news, 
                in-depth analysis, and comprehensive coverage across all categories.
              </p>
              <div className="stats-row">
                <Badge bg="primary" className="me-3 px-3 py-2">
                  🌍 Global Coverage
                </Badge>
                <Badge bg="success" className="me-3 px-3 py-2">
                  ⚡ Real-time Updates
                </Badge>
                <Badge bg="info" className="px-3 py-2">
                  📱 Mobile Friendly
                </Badge>
              </div>
            </Col>
            <Col lg={4} className="text-center">
              <div className="hero-image">
                <span style={{ fontSize: '8rem' }}>📰</span>
              </div>
            </Col>
          </Row>
        </div>

        {/* Featured News Section */}
        {featuredNews.length > 0 && (
          <div className="featured-section mb-5">
            <h2 className={`mb-4 text-${theme === 'dark' ? 'light' : 'dark'}`}>
              🌟 Featured Stories
            </h2>
            <Row className="g-4">
              {featuredNews.map((article, index) => (
                <Col lg={index === 0 ? 12 : 6} key={`featured-${index}`}>
                  <Card 
                    className={`featured-card h-100 ${theme === 'dark' ? 'bg-dark text-light border-secondary' : 'border-0 shadow'}`}
                    style={{ 
                      background: index === 0 && theme === 'light' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : undefined,
                      color: index === 0 && theme === 'light' ? 'white' : undefined
                    }}
                  >
                    {article.urlToImage && (
                      <Card.Img 
                        variant={index === 0 ? "top" : "top"} 
                        src={article.urlToImage}
                        style={{ 
                          height: index === 0 ? '300px' : '200px', 
                          objectFit: 'cover' 
                        }}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/600x300/6c757d/ffffff?text=Breaking+News';
                        }}
                      />
                    )}
                    <Card.Body>
                      <div className="mb-2">
                        <Badge 
                          bg={index === 0 ? "light" : "primary"} 
                          text={index === 0 ? "dark" : "white"}
                          className="me-2"
                        >
                          {article.source?.name || 'Breaking News'}
                        </Badge>
                        {index === 0 && (
                          <Badge bg="warning" text="dark">
                            FEATURED
                          </Badge>
                        )}
                      </div>
                      <Card.Title className={index === 0 ? "h3" : "h5"}>
                        {article.title}
                      </Card.Title>
                      <Card.Text>
                        {article.description}
                      </Card.Text>
                      <small className="text-muted">
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </small>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* Regular News Section */}
        <NewsList 
          news={regularNews} 
          loading={loading} 
          error={error}
          title="📈 Latest Headlines"
        />

        {/* Quick Stats */}
        <Row className="mt-5 pt-4 border-top">
          <Col md={3} className="text-center mb-3">
            <div className={`p-4 rounded ${theme === 'dark' ? 'bg-dark border' : 'bg-light'}`}>
              <h3 className="text-primary mb-2">1000+</h3>
              <p className={`mb-0 text-${theme === 'dark' ? 'light' : 'muted'}`}>Daily Articles</p>
            </div>
          </Col>
          <Col md={3} className="text-center mb-3">
            <div className={`p-4 rounded ${theme === 'dark' ? 'bg-dark border' : 'bg-light'}`}>
              <h3 className="text-success mb-2">24/7</h3>
              <p className={`mb-0 text-${theme === 'dark' ? 'light' : 'muted'}`}>Live Updates</p>
            </div>
          </Col>
          <Col md={3} className="text-center mb-3">
            <div className={`p-4 rounded ${theme === 'dark' ? 'bg-dark border' : 'bg-light'}`}>
              <h3 className="text-info mb-2">50+</h3>
              <p className={`mb-0 text-${theme === 'dark' ? 'light' : 'muted'}`}>News Sources</p>
            </div>
          </Col>
          <Col md={3} className="text-center mb-3">
            <div className={`p-4 rounded ${theme === 'dark' ? 'bg-dark border' : 'bg-light'}`}>
              <h3 className="text-warning mb-2">6</h3>
              <p className={`mb-0 text-${theme === 'dark' ? 'light' : 'muted'}`}>Categories</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
