import { useState, useEffect } from 'react';
import { newsApi, mockNews } from '../api';

export const useFetchNews = (type = 'headlines', category = null, query = null) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        let response;

        if (type === 'search' && query) {
          response = await newsApi.searchNews(query);
        } else if (type === 'category' && category) {
          response = await newsApi.getHeadlinesByCategory(category);
        } else {
          response = await newsApi.getTopHeadlines();
        }

        if (response.data && response.data.articles) {
          setNews(response.data.articles);
        } else {
          throw new Error('No articles found');
        }
      } catch (err) {
        console.warn('API request failed, using mock data:', err.message);
        // Fallback to mock data if API fails
        setNews(mockNews.articles);
        setError('Using sample data. Please check your API key configuration.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [type, category, query]);

  return { news, loading, error };
};

export default useFetchNews;
