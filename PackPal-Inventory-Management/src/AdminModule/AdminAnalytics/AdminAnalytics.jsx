import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CircularProgress } from '@mui/material';

export const AdminAnalytics = () => {
    // Dummy data for analytics
    const analyticsData = [
        {
            title: 'Total Users',
            value: 1200,
            description: 'Number of registered users on the platform.',
        },
        {
            title: 'Total Products',
            value: 450,
            description: 'Number of products available on the platform.',
        },
        {
            title: 'Active Categories',
            value: 15,
            description: 'Number of active categories currently in use.',
        },
        {
            title: 'Monthly Revenue',
            value: '$25,000',
            description: 'Revenue generated in the current month.',
        },
    ];

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
                Admin Analytics Dashboard
            </Typography>
            <Grid container spacing={3}>
                {analyticsData.map((data, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            sx={{
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                borderRadius: '8px',
                                height: '100%',
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 'bold', marginBottom: '10px' }}
                                >
                                    {data.title}
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '10px' }}
                                >
                                    {data.value}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#555' }}>
                                    {data.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ marginTop: '40px', textAlign: 'center' }}>
                <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                    System Performance
                </Typography>
                <CircularProgress size={60} />
                <Typography variant="body1" sx={{ marginTop: '10px', color: '#555' }}>
                    Loading real-time analytics...
                </Typography>
            </Box>
        </Box>
    );
};

