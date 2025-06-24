import React from 'react';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import NewsCard from './NewsCard';
import { useTheme } from '../context/ThemeContext';

const NewsList = ({ news, loading, error, title = "Latest News" }) => {
  const { theme } = useTheme();

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p className={`mt-3 text-${theme === 'dark' ? 'light' : 'muted'}`}>
          Loading news...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="warning" className="my-4">
        <Alert.Heading>Notice</Alert.Heading>
        <p>{error}</p>
      </Alert>
    );
  }

  if (!news || news.length === 0) {
    return (
      <Alert variant="info" className="my-4">
        <Alert.Heading>No News Found</Alert.Heading>
        <p>No articles were found for your search criteria.</p>
      </Alert>
    );
  }

  return (
    <div className="news-list">
      <h2 className={`mb-4 text-${theme === 'dark' ? 'light' : 'dark'}`}>
        {title}
      </h2>
      
      <Row xs={1} md={2} lg={3} className="g-4">
        {news.map((article, index) => (
          <Col key={`${article.url}-${index}`}>
            <NewsCard article={article} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewsList;
