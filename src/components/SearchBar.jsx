import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch, placeholder = "Search news..." }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="search-form">
      <InputGroup size="sm" style={{ minWidth: '200px' }}>
        <Form.Control
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <Button 
          variant="primary" 
          type="submit"
          className="search-btn"
        >
          🔍
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
