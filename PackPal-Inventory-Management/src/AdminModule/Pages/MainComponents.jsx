import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { AllUsers } from "../ManageUsers/AllUsers";
export const MainComponents = () => {
    const adminFeatures = [
        {
            title: 'User Management',
            description: 'Manage users, view profiles, and handle user-related tasks.',
            action: 'Manage Users',
            path: '/admin/AllUsers',
        },
        {
            title: 'Service Management',
            description: 'Add, update, or remove services offered by the platform.',
            action: 'Manage Services',
            path: '/service-management',
        },
        {
            title: 'Analytics Dashboard',
            description: 'View platform analytics, user activity, and performance metrics.',
            action: 'View Analytics',
            path: '/analytics-dashboard',
        },
        {
            title: 'Settings',
            description: 'Configure platform settings, roles, and permissions.',
            action: 'Go to Settings',
            path: '/settings',
        },
    ];
    //MeetRana162@gmail.com, Meet111, "email": "SamirVithalanni@gmail.com","password": "SamirGrow",
    //KhushiSahay@gmail.com, Khushi123


    return (
        <Box
            sx={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                marginBottom: '20px',
            }}
        >
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
                Admin Dashboard Overview
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px', color: '#555', textAlign: 'center' }}>
                Welcome to the admin panel! Manage users, services, and view analytics to keep the platform running smoothly.
            </Typography>
            <Grid container spacing={3}>
                {adminFeatures.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#555' }}>
                                    {feature.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={() => (window.location.href = feature.path)}
                                >
                                    {feature.action}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
