import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Alert, Breadcrumb } from 'react-bootstrap';
import NewsList from '../components/NewsList';
import SearchBar from '../components/SearchBar';
import { useFetchNews } from '../hooks/useFetchNews';
import { useTheme } from '../context/ThemeContext';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { theme } = useTheme();
  const query = searchParams.get('q') || '';
  const [currentQuery, setCurrentQuery] = useState(query);
  
  const { news, loading, error } = useFetchNews('search', null, currentQuery);

  useEffect(() => {
    if (query && query !== currentQuery) {
      setCurrentQuery(query);
    }
  }, [query, currentQuery]);

  const handleNewSearch = (newQuery) => {
    setSearchParams({ q: newQuery });
    setCurrentQuery(newQuery);
  };

  return (
    <div className="search-page">
      <Container className="py-4" style={{ marginTop: '80px' }}>
        {/* Breadcrumb */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Search Results</Breadcrumb.Item>
        </Breadcrumb>

        {/* Search Header */}
        <div className={`search-header p-4 rounded-3 mb-4 ${theme === 'dark' ? 'bg-dark border' : 'bg-light'}`}>
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className={`h3 text-${theme === 'dark' ? 'light' : 'dark'} mb-2`}>
                🔍 Search Results
              </h1>
              {query && (
                <p className={`text-${theme === 'dark' ? 'light' : 'muted'} mb-3`}>
                  Showing results for: <strong>"{query}"</strong>
                </p>
              )}
            </div>
            <div className="col-md-4">
              <SearchBar 
                onSearch={handleNewSearch} 
                placeholder="Search for news..."
              />
            </div>
          </div>
        </div>

        {/* Search Results */}
        {!query ? (
          <Alert variant="info">
            <Alert.Heading>No Search Query</Alert.Heading>
            <p>Please enter a search term to find news articles.</p>
          </Alert>
        ) : (
          <>
            {!loading && !error && (
              <div className="mb-4">
                <p className={`text-${theme === 'dark' ? 'light' : 'muted'}`}>
                  Found {news.length} article{news.length !== 1 ? 's' : ''} for "{query}"
                </p>
              </div>
            )}
            
            <NewsList 
              news={news} 
              loading={loading} 
              error={error}
              title=""
            />

            {/* Search Tips */}
            {!loading && news.length === 0 && !error && (
              <div className={`mt-4 p-4 rounded ${theme === 'dark' ? 'bg-dark border' : 'bg-light'}`}>
                <h5 className={`text-${theme === 'dark' ? 'light' : 'dark'} mb-3`}>
                  Search Tips
                </h5>
                <ul className={`text-${theme === 'dark' ? 'light' : 'muted'}`}>
                  <li>Try using different keywords</li>
                  <li>Use more general terms</li>
                  <li>Check your spelling</li>
                  <li>Try searching for recent topics or events</li>
                </ul>
                
                <div className="mt-3">
                  <h6 className={`text-${theme === 'dark' ? 'light' : 'dark'}`}>
                    Suggested searches:
                  </h6>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    <button 
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleNewSearch('technology')}
                    >
                      Technology
                    </button>
                    <button 
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleNewSearch('sports')}
                    >
                      Sports
                    </button>
                    <button 
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleNewSearch('business')}
                    >
                      Business
                    </button>
                    <button 
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleNewSearch('health')}
                    >
                      Health
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default SearchPage;
