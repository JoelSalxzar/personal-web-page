import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Box
            sx={{
                maxWidth: 500,
                mx: 'auto',
                mt: 5,
                p: 4,
                boxShadow: 3,
                borderRadius: 2,
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
            }}
        >
            <Typography variant="h5" gutterBottom>
                Get in Touch
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
                <InstagramIcon sx={{ fontSize: 40, color: '#E4405F' }} />
                <LinkedInIcon sx={{ fontSize: 40, color: '#0077B5' }} />
            </Stack>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="error"
                    fullWidth
                    sx={{
                        mt: 3,
                        py: 1.5,
                        fontSize: '1rem',
                        backgroundColor: '#d32f2f',
                        '&:hover': { backgroundColor: '#d32f2f' },
                    }}
                >
                    Send Message
                </Button>
            </form>
        </Box>
    );
};

export default Contact;