import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import FeedbackForm from '../components/FeedbackForm';

const FeedbackPage = () => {
  return (
    <div className="feedback-page" style={{ marginTop: '80px' }}>
      <Container className="py-4" style={{ marginTop: '80px' }}>
        {/* Breadcrumb */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Feedback</Breadcrumb.Item>
        </Breadcrumb>

        {/* Feedback Form */}
        <FeedbackForm />
      </Container>
    </div>
  );
};

export default FeedbackPage;
