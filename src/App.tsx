import {
  Route, Routes,
} from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/Aboutme';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import BlogSection from './components/Blog';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { HashLink } from 'react-router-hash-link';

function App() {
  return (
    <div>
      <AppBar color='error'>
        <Toolbar>
          <Typography variant="h6" sx={{ color: 'black', flexGrow: 1 }}>
            Joel Cruz
          </Typography>
          <Button>
            <HashLink smooth to="/#about" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>
              About
            </HashLink>
          </Button>
          <Button>
            <HashLink smooth to="/#blog" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Blog</HashLink>
          </Button>
          <Button>
            <HashLink smooth to="/#contact" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Contact Me</HashLink>
          </Button>
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
