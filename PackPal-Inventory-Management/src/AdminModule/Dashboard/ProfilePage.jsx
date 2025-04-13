import React, { useState, useEffect } from "react";
import {
    Avatar,
    Card,
    CardContent,
    Container,
    Grid,
    Typography,
    Box,
    Divider,
    CircularProgress,
    Alert,
    Paper,
} from "@mui/material";
import { Navbar } from "../Layout/Navbar";

export const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUserProfile = async () => {
            setLoading(true);
            try {
                const mockUser = {
                    name: "John Doe",
                    email: "john.doe@example.com",
                    phone: "123-456-7890",
                    joined: "2023-01-01",
                    last_login: "2023-04-01",
                    status: "Active",
                    role: "Admin",
                    profile_image: "https://via.placeholder.com/150",
                    about: "This is a mock user profile for testing purposes.",
                };

                await new Promise((resolve) => setTimeout(resolve, 1000));
                setUser(mockUser);
            } catch (err) {
                setError("Failed to fetch profile. This is a mock error.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Alert severity="error">{error}</Alert>
            </Box>
        );
    }

    return (
        <>
            <Navbar />
            <Container maxWidth="md" sx={{ mt: 10, mb: 5 }}>
                <Paper elevation={6} sx={{ borderRadius: 4, overflow: "hidden", backgroundColor: "#f9fafc" }}>
                    <CardContent>
                        {/* Top Section */}
                        <Grid container spacing={4} alignItems="center" justifyContent="center">
                            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                                <Avatar
                                    alt={user.name}
                                    src={user.profile_image}
                                    sx={{
                                        width: 130,
                                        height: 130,
                                        mx: "auto",
                                        border: "4px solid #1976d2",
                                        boxShadow: 4,
                                    }}
                                />
                                <Typography variant="h5" sx={{ mt: 2, fontWeight: 600, color: "#1976d2" }}>
                                    {user.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {user.role}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <Grid container spacing={2}>
                                    {[
                                        ["Email", user.email],
                                        ["Phone", user.phone],
                                        ["Joined", user.joined],
                                        ["Last Login", user.last_login],
                                        ["Status", user.status],
                                    ].map(([label, value], idx) => (
                                        <Grid key={idx} item xs={6}>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {label}:
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color={
                                                    label === "Status"
                                                        ? value === "Active"
                                                            ? "green"
                                                            : "red"
                                                        : "text.secondary"
                                                }
                                                fontWeight={label === "Status" ? "bold" : "normal"}
                                            >
                                                {value || "N/A"}
                                            </Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>

                        <Divider sx={{ my: 4 }} />

                        {/* About Section */}
                        <Box mb={4}>
                            <Typography variant="h6" color="#1976d2" fontWeight="bold" gutterBottom>
                                About
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {user.about}
                            </Typography>
                        </Box>

                        {/* Responsibilities Section */}
                        <Box>
                            <Typography variant="h6" color="#1976d2" fontWeight="bold" gutterBottom>
                                Admin Responsibilities
                            </Typography>
                            <Box component="ul" sx={{ pl: 3, color: "text.secondary", lineHeight: 2 }}>
                                {[
                                    "Managing user accounts and roles",
                                    "Controlling system-wide configurations",
                                    "Monitoring logs and platform performance",
                                    "Approving provider registrations",
                                    "Ensuring system security and updates",
                                    "Coordinating with dev & support teams",
                                ].map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </Box>
                        </Box>
                    </CardContent>
                </Paper>
            </Container>
        </>
    );
};
