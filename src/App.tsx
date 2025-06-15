import {
  Route, Link, Routes,
  useNavigate
} from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/Aboutme';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import BlogSection from './components/Blog';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            JoelSalxzar
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/blog')}>Blog</Button>
          <Button color="inherit" onClick={() => navigate('/about')}>About</Button>
          <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>
        </Toolbar>
      </AppBar>

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
