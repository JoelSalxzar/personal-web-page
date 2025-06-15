import {
  Route, Link, Routes
} from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/Aboutme';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogSection from './components/Blog';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link> | <Link to="/blog">Blog...</Link> | <Link to="/contact">Contact Me</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogSection />} />
      </Routes>
    </div>
  );
}

export default App;
