import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Breadcrumb } from 'react-bootstrap';
import NewsList from '../components/NewsList';
import CategoryNav from '../components/CategoryNav';
import { useFetchNews } from '../hooks/useFetchNews';
import { useTheme } from '../context/ThemeContext';

const CategoryPage = () => {
  const { category } = useParams();
  const { theme } = useTheme();
  const { news, loading, error } = useFetchNews('category', category);

  const categoryConfig = {
    technology: { title: 'Technology', icon: '💻', color: 'primary' },
    sports: { title: 'Sports', icon: '⚽', color: 'success' },
    business: { title: 'Business', icon: '💼', color: 'info' },
    health: { title: 'Health', icon: '🏥', color: 'warning' },
    entertainment: { title: 'Entertainment', icon: '🎬', color: 'danger' },
    science: { title: 'Science', icon: '🔬', color: 'secondary' },
  };

  const config = categoryConfig[category] || { 
    title: category?.charAt(0).toUpperCase() + category?.slice(1), 
    icon: '📰', 
    color: 'primary' 
  };

  return (
    <div className="category-page">
      <CategoryNav />
      
      <Container className="py-4" style={{ marginTop: '80px' }}>
        {/* Breadcrumb */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>
            {config.title}
          </Breadcrumb.Item>
        </Breadcrumb>

        {/* Category Header */}
        <div className="category-header mb-5">
          <div className={`p-4 rounded-3 ${theme === 'dark' ? 'bg-dark border' : 'bg-light'}`}>
            <div className="d-flex align-items-center mb-3">
              <span className="display-4 me-3">{config.icon}</span>
              <div>
                <h1 className={`display-5 fw-bold text-${theme === 'dark' ? 'light' : 'dark'} mb-2`}>
                  {config.title} News
                </h1>
                <p className={`lead text-${theme === 'dark' ? 'light' : 'muted'} mb-0`}>
                  Stay updated with the latest {config.title.toLowerCase()} news and developments
                </p>
              </div>
            </div>
            
            <div className="category-stats">
              <span className={`badge bg-${config.color} me-2 px-3 py-2`}>
                Latest Updates
              </span>
              <span className={`badge bg-outline-${config.color} text-${theme === 'dark' ? 'light' : 'dark'} px-3 py-2`}>
                {news.length} Articles Found
              </span>
            </div>
          </div>
        </div>

        {/* News List */}
        <NewsList 
          news={news} 
          loading={loading} 
          error={error}
          title={`${config.icon} ${config.title} Headlines`}
        />

        {/* Category Info */}
        {!loading && news.length > 0 && (
          <div className={`mt-5 p-4 rounded ${theme === 'dark' ? 'bg-dark border' : 'bg-light'}`}>
            <div className="row align-items-center">
              <div className="col-md-8">
                <h5 className={`text-${theme === 'dark' ? 'light' : 'dark'} mb-2`}>
                  About {config.title} News
                </h5>
                <p className={`text-${theme === 'dark' ? 'light' : 'muted'} mb-0`}>
                  {getCategoryDescription(category)}
                </p>
              </div>
              <div className="col-md-4 text-center">
                <span style={{ fontSize: '3rem' }}>{config.icon}</span>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

const getCategoryDescription = (category) => {
  const descriptions = {
    technology: "Discover the latest in tech innovation, gadgets, software, AI, and digital transformation that's shaping our future.",
    sports: "Get the latest scores, match highlights, player transfers, and sports analysis from around the globe.",
    business: "Stay informed about market trends, corporate news, economic developments, and financial insights.",
    health: "Access important health news, medical breakthroughs, wellness tips, and healthcare policy updates.",
    entertainment: "Catch up on celebrity news, movie releases, TV shows, music, and entertainment industry updates.",
    science: "Explore scientific discoveries, research breakthroughs, space exploration, and environmental science news."
  };
  
  return descriptions[category] || "Stay updated with the latest news and developments in this category.";
};

export default CategoryPage;
