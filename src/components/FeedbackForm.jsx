import React, { useState } from 'react';
import { Form, Button, Alert, Card, Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

const FeedbackForm = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    rating: '',
    feedback: '',
    newsletter: false
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (!formData.rating) {
      newErrors.rating = 'Please provide a rating';
    }

    if (!formData.feedback.trim()) {
      newErrors.feedback = 'Feedback is required';
    } else if (formData.feedback.trim().length < 10) {
      newErrors.feedback = 'Feedback must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Feedback submitted:', formData);
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        category: '',
        rating: '',
        feedback: '',
        newsletter: false
      });

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className={`shadow ${theme === 'dark' ? 'bg-dark text-light' : ''}`}>
            <Card.Header className={theme === 'dark' ? 'bg-secondary text-light' : 'bg-primary text-white'}>
              <h3 className="mb-0">📝 We Value Your Feedback</h3>
              <p className="mb-0 mt-2">Help us improve NewsStream by sharing your thoughts</p>
            </Card.Header>
            
            <Card.Body>
              {showSuccess && (
                <Alert variant="success" className="mb-4">
                  <Alert.Heading>Thank You! 🎉</Alert.Heading>
                  <p>Your feedback has been submitted successfully. We appreciate your input!</p>
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        isInvalid={!!errors.name}
                        className={theme === 'dark' ? 'bg-dark text-light border-secondary' : ''}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        isInvalid={!!errors.email}
                        className={theme === 'dark' ? 'bg-dark text-light border-secondary' : ''}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Feedback Category *</Form.Label>
                      <Form.Select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        isInvalid={!!errors.category}
                        className={theme === 'dark' ? 'bg-dark text-light border-secondary' : ''}
                      >
                        <option value="">Select a category</option>
                        <option value="general">General Feedback</option>
                        <option value="bug">Bug Report</option>
                        <option value="feature">Feature Request</option>
                        <option value="ui">User Interface</option>
                        <option value="performance">Performance</option>
                        <option value="content">News Content</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.category}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Overall Rating *</Form.Label>
                      <Form.Select
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        isInvalid={!!errors.rating}
                        className={theme === 'dark' ? 'bg-dark text-light border-secondary' : ''}
                      >
                        <option value="">Rate your experience</option>
                        <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                        <option value="4">⭐⭐⭐⭐ Good</option>
                        <option value="3">⭐⭐⭐ Average</option>
                        <option value="2">⭐⭐ Poor</option>
                        <option value="1">⭐ Very Poor</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.rating}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Your Feedback *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    placeholder="Please share your detailed feedback, suggestions, or report any issues..."
                    isInvalid={!!errors.feedback}
                    className={theme === 'dark' ? 'bg-dark text-light border-secondary' : ''}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.feedback}
                  </Form.Control.Feedback>
                  <Form.Text className={`text-${theme === 'dark' ? 'light' : 'muted'}`}>
                    Minimum 10 characters required
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    label="Subscribe to our newsletter for latest updates"
                    className={theme === 'dark' ? 'text-light' : ''}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="lg"
                    className="fw-bold"
                  >
                    Submit Feedback 📤
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FeedbackForm;
