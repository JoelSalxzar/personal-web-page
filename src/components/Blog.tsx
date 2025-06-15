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
            <Typography variant="h4" gutterBottom align="center">
                Blog
            </Typography>

            <Grid container spacing={4}>
                {blogPosts.map((post) => (
                    <Grid key={post.id}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6">{post.title}</Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {post.date ? new Date(post.date).toLocaleDateString() : 'No date'}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    {post.excerpt}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
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
