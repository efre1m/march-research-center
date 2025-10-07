// App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Publications from './pages/Publications';
import Team from './pages/Team';
import NewsEvents from './pages/NewsEvents';
import Careers from './pages/Careers';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/globals.css';
import { useEffect } from 'react';

// Component to handle smooth scroll to top on route change
const ScrollToTopOnRouteChange: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const AppWrapper: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active page for Layout highlighting
  const getActivePage = () => {
    const path = location.pathname;
    if (path.startsWith('/projects')) return 'Projects';
    if (path.startsWith('/publications')) return 'Publications';
    if (path.startsWith('/team')) return 'Team';
    if (path.startsWith('/news-events')) return 'News & Events';
    if (path.startsWith('/careers')) return 'Careers';
    if (path.startsWith('/about')) return 'About';
    if (path.startsWith('/contact')) return 'Contact';
    return 'Home';
  };

  const activePage = getActivePage();

  // Navigation handler
  const handlePageChange = (page: string) => {
    switch (page) {
      case 'Home': navigate('/'); break;
      case 'Projects': navigate('/projects'); break;
      case 'Publications': navigate('/publications'); break;
      case 'Team': navigate('/team'); break;
      case 'News & Events': navigate('/news-events'); break;
      case 'Careers': navigate('/careers'); break;
      case 'About': navigate('/about'); break;
      case 'Contact': navigate('/contact'); break;
    }
  };

  return (
    <>
      <ScrollToTopOnRouteChange /> {/* Smooth scroll is applied here */}
      <Layout activePage={activePage} onPageChange={handlePageChange}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
};

// Wrap AppWrapper with Router
const App: React.FC = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
