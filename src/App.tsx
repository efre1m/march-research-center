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

const AppWrapper: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active page based on URL path
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
  );
};

const App: React.FC = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
