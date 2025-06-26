import React from 'react';
import {
    Box,
    Typography,
    Container,
    Stack
} from '@mui/material';
import AboutMe from './Aboutme';
import Contact from './Contact';
import Blog from './Blog';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';

const Home: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Welcome to My Site
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ fontFamily: 'revert', mb: 2 }}>
                    Hello! I'm glad to see you around here :)
                </Typography>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                    <ConstructionOutlinedIcon color="warning" />
                    <Typography variant="h6" color="text.secondary" sx={{ fontFamily: 'revert' }}>
                        Warning, work in progress
                    </Typography>
                    <ConstructionOutlinedIcon color="warning" />
                </Stack>
            </Box>
            <Box component="section" id="about" sx={{ mb: 6 }}>
                <AboutMe />
            </Box>
            <Box component="section" id="blog" sx={{ mb: 6 }}>
                <Blog />
            </Box>
            <Box component="section" id="contact">
                <Contact />
            </Box>
        </Container>
    );
};

export default Home;