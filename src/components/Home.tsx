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

            <Grid container spacing={4}>
                <Grid>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5">About Me</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                Learn more about who I am, what I do, and what I’m passionate about.
                            </Typography>
                            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => navigate('/about')}>
                                Read More
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid >
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5">Blog</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                Check out my latest thoughts and tutorials on development and design.
                            </Typography>
                            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => navigate('/blog')}>
                                Visit Blog
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid >
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5">Contact Me</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                Send me a message, even if you just want to greet!
                            </Typography>
                            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => navigate('/contact')}>
                                Contact Me!
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;