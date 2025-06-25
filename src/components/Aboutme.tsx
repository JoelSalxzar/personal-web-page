import React, { useState } from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import cowboyme from '../assets/cowboy me.jpeg'
import meinsalt from '../assets/meinsalt.jpeg'
import sunsetintown from '../assets/sunsetintown.jpeg'
import dario from '../assets/darío.jpeg'
import luffy from '../assets/luffy.jpeg'
import me from '../assets/me.jpeg'
import sunset from '../assets/sunsetinhome.jpeg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



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
            <Box sx={{ color: 'red' }}>
                <Button onClick={prevSlide} sx={{ color: 'black' }}><ArrowBackIosIcon color='error' /></Button>
            </Box>
            <Box sx={{ width: '100%', height: 'auto', borderRadius: '10px' }}>
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    style={{ width: '400px', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                />
            </Box>
            <Button onClick={nextSlide} sx={{ color: 'black' }}><ArrowForwardIosIcon color='error' /></Button>
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
            <PhotoSlider images={[meinsalt, me, dario, sunset, luffy, sunsetintown, cowboyme]} />
            <Typography variant="h4" gutterBottom>
                About Me
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body1" sx={{ textAlign: 'left' }}>
                Hello and welcome to my site, this is Joel Cruz and I'm glad that you are here interested in reading about who I am, I will start simple; I'm 25 years old, currently located
                in Mexico, Software Engineer with 4+ years of experience in backend and frontend[...]
            </Typography>
        </Box>
    );
};

export default AboutMe;