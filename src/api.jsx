import axios from 'axios';

// Using NewsAPI.org - You'll need to get a free API key from https://newsapi.org/
const API_KEY = import.meta.env.VITE_NEWS_API_KEY || '6b5f9b5c4e4f4c3a9b8c7d6e5f4g3h2i';
const BASE_URL = 'https://newsapi.org/v2';

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

// API functions
export const newsApi = {
  // Get top headlines
  getTopHeadlines: (country = 'us', pageSize = 20) => {
    return api.get('/top-headlines', {
      params: {
        country,
        pageSize,
      },
    });
  },

  // Get headlines by category
  getHeadlinesByCategory: (category, country = 'us', pageSize = 20) => {
    return api.get('/top-headlines', {
      params: {
        category,
        country,
        pageSize,
      },
    });
  },

  // Search news
  searchNews: (query, pageSize = 20, sortBy = 'publishedAt') => {
    return api.get('/everything', {
      params: {
        q: query,
        pageSize,
        sortBy,
      },
    });
  },
};

// Mock data for development (in case API key is not working)
export const mockNews = {
  articles: [
    {
      title: "Revolutionary AI Technology Breakthrough Announced",
      description: "Scientists have made a groundbreaking discovery in artificial intelligence that could change the way we interact with technology.",
      url: "https://example.com/news/1",
      urlToImage: "https://via.placeholder.com/400x200/0066cc/ffffff?text=AI+News",
      publishedAt: "2025-06-23T10:00:00Z",
      source: { name: "Tech Daily" },
      author: "Jane Smith"
    },
    {
      title: "Global Climate Summit Reaches Historic Agreement",
      description: "World leaders unite on ambitious climate goals for the next decade, promising unprecedented action on environmental protection.",
      url: "https://example.com/news/2",
      urlToImage: "https://via.placeholder.com/400x200/009900/ffffff?text=Climate+News",
      publishedAt: "2025-06-23T08:30:00Z",
      source: { name: "Global News" },
      author: "John Doe"
    },
    {
      title: "Sports Championship Finals Set for This Weekend",
      description: "The most anticipated sports event of the year is approaching, with record-breaking ticket sales and worldwide viewership expected.",
      url: "https://example.com/news/3",
      urlToImage: "https://via.placeholder.com/400x200/ff6600/ffffff?text=Sports+News",
      publishedAt: "2025-06-23T07:15:00Z",
      source: { name: "Sports Central" },
      author: "Mike Johnson"
    }
  ]
};

export default api;
