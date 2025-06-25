import React from 'react';
import {
    Box,
    Typography,
    Container
} from '@mui/material';
import AboutMe from './Aboutme';
import Contact from './Contact';
import Blog from './Blog';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';

const Home: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Welcome to my site
                </Typography>
                <Typography variant="h6" color="text.secondary" fontFamily={'revert'}>
                    Hello! I'm glad to see you around here :)
                </Typography>
                <Typography variant="h6" color="text.secondary" fontFamily={'revert'}>
                    <ConstructionOutlinedIcon />   Warning, working in progress <ConstructionOutlinedIcon />
                </Typography>
            </Box>
            <Box id='about'>
                <AboutMe />
            </Box>
            <Box id='blog'>
                <Blog />
            </Box>
            <Box id='contact'>
                <Contact />
            </Box>
        </Container>
    );
};

export default Home;
