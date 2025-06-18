import React, { useState } from 'react';
import { Box, Typography, Avatar, Divider, Button } from '@mui/material';
import image1 from '../assets/Joel and Covi.jpg'


interface PhotoSliderProps {
    images: string[];
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '600px', margin: 'auto' }}>
            <Button onClick={prevSlide} sx={{ color: 'black' }}>←</Button>
            <Box sx={{ width: '100%', height: 'auto', borderRadius: '10px' }}>
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    style={{ width: '400px', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                />
            </Box>
            <Button onClick={nextSlide} sx={{ color: 'black' }}>→</Button>
        </Box>
    );
};


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
            {/*             <Avatar
                alt="Your Name"
                src="/your-photo.jpg" // Replace with your actual photo or remove `src`
                sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
            /> */}
            <PhotoSlider images={[image1, 'https://th.bing.com/th/id/OIP.O9e7zkbH3fVLeBm0PKbEzwHaFi?w=238&h=180&c=7&r=0&o=7&pid=1.7&rm=3']} />
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