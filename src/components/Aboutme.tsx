import React from 'react';
import { Box, Typography, Avatar, Divider } from '@mui/material';

const AboutMe: React.FC = () => {
    return (
        <Box
            sx={{
                maxWidth: 700,
                mx: 'auto',
                mt: 5,
                p: 4,
                boxShadow: 3,
                borderRadius: 2,
                textAlign: 'center',
            }}
        >
            <Avatar
                alt="Your Name"
                src="/your-photo.jpg" // Replace with your actual photo or remove `src`
                sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
            />
            <Typography variant="h4" gutterBottom>
                About Me
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body1" sx={{ textAlign: 'left' }}>
                Hi I Like Cats :D
            </Typography>
        </Box>
    );
};

export default AboutMe;