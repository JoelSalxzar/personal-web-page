import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button
} from '@mui/material';
import { blogPosts } from '../data/blogPosts';

const BlogSection: React.FC = () => {
    return (
        <Box sx={{ maxWidth: 1000, mx: 'auto', mt: 8, px: 2 }}>
            <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                The Stuff You May Be Here For...
            </Typography>

            <Grid container spacing={4}>
                {blogPosts.map((post) => (
                    <Grid key={post.id}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: 3,
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    {post.title}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                                    {post.date ? new Date(post.date).toLocaleDateString() : 'No date'}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                    {post.excerpt}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="outlined" color="error">
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BlogSection;