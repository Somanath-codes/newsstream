import React, { useState } from 'react';
import { Card, Badge, Button, Modal } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

const NewsCard = ({ article }) => {
  const [showModal, setShowModal] = useState(false);
  const { theme } = useTheme();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const truncateText = (text, maxLength = 150) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <>
      <Card 
        className={`news-card h-100 shadow-sm ${theme === 'dark' ? 'bg-dark text-light' : ''}`}
        style={{ transition: 'transform 0.2s' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        {article.urlToImage && (
          <Card.Img 
            variant="top" 
            src={article.urlToImage} 
            alt={article.title}
            style={{ height: '200px', objectFit: 'cover' }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x200/6c757d/ffffff?text=No+Image';
            }}
          />
        )}
        
        <Card.Body className="d-flex flex-column">
          <div className="mb-2">
            <Badge bg="primary" className="me-2">
              {article.source?.name || 'Unknown Source'}
            </Badge>
            <small className={`text-${theme === 'dark' ? 'light' : 'muted'}`}>
              {formatDate(article.publishedAt)}
            </small>
          </div>
          
          <Card.Title className="fs-6 fw-bold mb-2">
            {article.title}
          </Card.Title>
          
          <Card.Text className={`flex-grow-1 text-${theme === 'dark' ? 'light' : 'muted'}`}>
            {truncateText(article.description)}
          </Card.Text>
          
          <div className="mt-auto">
            <div className="d-flex gap-2">
              <Button 
                variant="primary" 
                size="sm" 
                onClick={() => setShowModal(true)}
              >
                Read More
              </Button>
              {article.url && (
                <Button 
                  variant="outline-secondary" 
                  size="sm"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Original Article
                </Button>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Modal for full article view */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="lg"
        className={theme === 'dark' ? 'dark-modal' : ''}
      >
        <Modal.Header 
          closeButton 
          className={theme === 'dark' ? 'bg-dark text-light border-secondary' : ''}
        >
          <Modal.Title className="fs-5">
            {article.title}
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body className={theme === 'dark' ? 'bg-dark text-light' : ''}>
          {article.urlToImage && (
            <img 
              src={article.urlToImage} 
              alt={article.title}
              className="img-fluid mb-3 rounded"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x400/6c757d/ffffff?text=No+Image';
              }}
            />
          )}
          
          <div className="mb-3">
            <Badge bg="primary" className="me-2">
              {article.source?.name || 'Unknown Source'}
            </Badge>
            {article.author && (
              <small className={`text-${theme === 'dark' ? 'light' : 'muted'}`}>
                By {article.author}
              </small>
            )}
            <div className={`text-${theme === 'dark' ? 'light' : 'muted'} mt-1`}>
              <small>{formatDate(article.publishedAt)}</small>
            </div>
          </div>
          
          <p className="lead">
            {article.description}
          </p>
          
          {article.content && (
            <div>
              <h6>Article Content:</h6>
              <p>{article.content}</p>
            </div>
          )}
        </Modal.Body>
        
        <Modal.Footer className={theme === 'dark' ? 'bg-dark border-secondary' : ''}>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          {article.url && (
            <Button 
              variant="primary"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Full Article
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewsCard;
