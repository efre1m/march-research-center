import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Publications from './pages/Publications';
import Team from './pages/Team';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Stories from './pages/Stories';
import StoryDetail from './pages/StoryDetail';
import Careers from './pages/Careers';
import Apply from './pages/Apply';
import About from './pages/About';
import Contact from './pages/Contact';
import ResearchAreas from './pages/ResearchAreas';
import Leadership from './pages/Leadership';
import Impacts from './pages/Impacts';
import InTheMedia from './pages/InTheMedia'; // Add this import
import ScrollToTop from './components/ui/ScrollToTop';
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
    if (path.startsWith('/research-areas')) return 'Research Areas';
    if (path.startsWith('/impacts')) return 'Impacts';
    if (path.startsWith('/leadership')) return 'Leadership';
    if (path.startsWith('/projects')) return 'Projects';
    if (path.startsWith('/publications')) return 'Publications';
    if (path.startsWith('/team')) return 'Team';
    if (path.startsWith('/news')) return 'News';
    if (path.startsWith('/events')) return 'Events';
    if (path.startsWith('/stories')) return 'Stories';
    if (path.startsWith('/careers')) return 'Careers';
    if (path.startsWith('/apply')) return 'Careers'; // Apply page should highlight Careers
    if (path.startsWith('/about')) return 'About';
    if (path.startsWith('/contact')) return 'Contact';
    if (path.startsWith('/media')) return 'In The Media'; // Add this line
    return 'Home';
  };

  const activePage = getActivePage();

  // Navigation handler
  const handlePageChange = (page: string) => {
    switch (page) {
      case 'Home': navigate('/'); break;
      case 'Research Areas': navigate('/research-areas'); break;
      case 'Impacts': navigate('/impacts'); break;
      case 'Leadership': navigate('/leadership'); break;
      case 'Projects': navigate('/projects'); break;
      case 'Publications': navigate('/publications'); break;
      case 'Team': navigate('/team'); break;
      case 'News': navigate('/news'); break;
      case 'Events': navigate('/events'); break;
      case 'Stories': navigate('/stories'); break;
      case 'Careers': navigate('/careers'); break;
      case 'About': navigate('/about'); break;
      case 'Contact': navigate('/contact'); break;
      case 'In The Media': navigate('/media'); break; // Add this line
      default: break;
    }
  };

  return (
    <>
      <ScrollToTopOnRouteChange />
      <Layout activePage={activePage} onPageChange={handlePageChange}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research-areas" element={<ResearchAreas />} />
          <Route path="/impacts" element={<Impacts />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:newsId" element={<NewsDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:storyId" element={<StoryDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<InTheMedia />} /> {/* Add this route */}
        </Routes>
      </Layout>

      {/* Add ScrollToTop here - it will be available on all pages */}
      <ScrollToTop />
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