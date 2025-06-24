# 📰 NewsStream - React News Application -  https://vercel.com/somanaths-projects/newsstream/9iJDWKi54HXdHmpXRX5umoqTmcFC

A responsive and dynamic single-page news application built with React.js, featuring live news headlines, category navigation, search functionality, and theme switching.

![NewsStream App](https://via.placeholder.com/800x400/0066cc/ffffff?text=NewsStream+App)

## ✨ Features

### Core Functionality
- 🏠 **Home Page** - Latest news headlines with featured stories
- 📂 **Category Navigation** - Browse news by Technology, Sports, Business, Health, Entertainment, Science
- 🔍 **Search Functionality** - Find news articles by keywords
- 📖 **Article Modal** - View full articles in responsive modals
- 📝 **Feedback Form** - User feedback collection with validation
- 🌙 **Dark/Light Theme** - Toggle between themes with persistence

### Technical Features
- 📱 **Responsive Design** - Mobile-first approach using Bootstrap Grid
- ⚡ **Real-time News** - Live news updates from NewsAPI
- 🚀 **React Router** - Smooth navigation between pages
- 🎨 **Modern UI** - Clean, professional design with animations
- ♿ **Accessibility** - WCAG compliant with proper ARIA labels
- 🔄 **Error Handling** - Graceful fallbacks and error states

## 🛠️ Technology Stack

### Frontend
- **React.js 19** - Modern functional components with hooks
- **React Router Dom** - Client-side routing
- **Bootstrap 5** - Responsive CSS framework
- **React Bootstrap** - Bootstrap components for React
- **Axios** - HTTP client for API requests

### Tools & Build
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing

### API
- **NewsAPI.org** - Live news data source

## 📋 Requirements Met

### HTML5 Elements
- ✅ Semantic HTML structure
- ✅ Forms with validation (feedback form)
- ✅ Lists for news display
- ✅ Hyperlinks to external articles
- ✅ Meta tags for SEO

### CSS3 Features
- ✅ External stylesheets
- ✅ CSS Grid and Flexbox
- ✅ Custom properties (CSS variables)
- ✅ Animations and transitions
- ✅ Media queries for responsiveness
- ✅ Pseudo-classes and selectors
- ✅ Box shadows and effects

### Bootstrap Components
- ✅ Grid system for layout
- ✅ Navigation components
- ✅ Cards for news display
- ✅ Modals for article viewing
- ✅ Forms and form validation
- ✅ Buttons and badges
- ✅ Typography utilities
- ✅ Responsive utilities

### React.js Features
- ✅ JSX syntax
- ✅ Functional components
- ✅ Class-based components (where appropriate)
- ✅ Props for data passing
- ✅ State management with useState
- ✅ Effect hooks (useEffect)
- ✅ Custom hooks (useFetchNews)
- ✅ Context API (ThemeContext)
- ✅ Event handling
- ✅ Form validation
- ✅ Controlled components
- ✅ Router navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- NewsAPI key (free at [newsapi.org](https://newsapi.org/register))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd newsstream-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in root directory
   VITE_NEWS_API_KEY=your_actual_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Build the application
npm run build

# Preview the build
npm run preview
```

## 🎨 Design Features

### Responsive Design
- Mobile-first approach
- Breakpoint optimizations
- Touch-friendly interface
- Flexible grid layouts

### User Experience
- Smooth animations and transitions
- Loading states and error handling
- Intuitive navigation
- Search with suggestions
- Theme persistence

### Accessibility
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus indicators
- ARIA labels and roles

## 🔧 Configuration

### API Setup
1. Sign up at [NewsAPI.org](https://newsapi.org/register)
2. Get your free API key
3. Add key to `.env` file:
   ```
   VITE_NEWS_API_KEY=your_api_key_here
   ```

### Theme Customization
Modify CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
  /* Add your custom colors */
}
```

### News Categories
Edit categories in `src/components/CategoryNav.js` and `src/pages/CategoryPage.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [NewsAPI.org](https://newsapi.org/) for providing news data
- [React](https://reactjs.org/) for the amazing framework
- [Bootstrap](https://getbootstrap.com/) for responsive design
- [Vite](https://vitejs.dev/) for fast development experience

## 🐛 Known Issues

- API rate limits may apply with free NewsAPI key
- Some news sources may have CORS restrictions
- Images may fail to load from external sources

## 🔮 Future Enhancements

- [ ] Bookmark favorite articles
- [ ] User authentication
- [ ] Push notifications
- [ ] Offline reading support
- [ ] Social media sharing
- [ ] Article comments system
- [ ] Advanced search filters
- [ ] Multiple language support

---

**Made with ❤️ for news enthusiasts**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
