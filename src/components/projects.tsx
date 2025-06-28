import React, { useEffect, useState } from 'react';
import {
    Box,
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    CircularProgress,
} from '@mui/material';

interface repoData {
    id: string;
    name: string;
    description: string;
    html_url: string;
}

const GitHubProjects = ({ username = 'octocat' }) => {
    const [repos, setRepos] = useState<repoData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const res = await fetch(`https://api.github.com/users/${username}/repos`);
                const data = await res.json();
                setRepos(data);
            } catch (err) {
                console.error('Failed to fetch repos:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ padding: 2 }}>
            <Grid container spacing={2}>
                {repos.map((repo) => (
                    <Grid key={repo.id}>
                        <Card sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: 3,
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.03)',
                                boxShadow: 6,
                            },
                        }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    {repo.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {repo.description || 'No description provided.'}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ mt: 'auto' }}>
                                <Button size="small" variant='outlined' href={repo.html_url} target="_blank" rel="noopener" color='error'>
                                    View on GitHub
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default GitHubProjects;
