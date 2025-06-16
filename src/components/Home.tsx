import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Container
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AboutMe from './Aboutme';
import Contact from './Contact';
import Blog from './Blog';


const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md" sx={{ mt: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Welcome to my site
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Hello! I'm glad to see you around here :)
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
