import React, { useEffect, useState } from "react";
import { Box, Typography, Avatar, Divider, Stack, Paper, Button } from "@mui/material";
import axios from "axios";

export const OwnerProfilePage = () => {
    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "owner@example.com",
        phone: "+91 9876543210",
        company: "ABC Pvt Ltd",
        role: "Owner",
    });

    // Uncomment this later to fetch from API
    /*
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("authToken");
                const response = await axios.get("http://localhost:8000/api/owner/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setProfile(response.data);
            } catch (error) {
                console.error("Failed to fetch profile", error);
            }
        };

        fetchProfile();
    }, []);
    */

    return (
        <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
            <Paper
                elevation={4}
                sx={{
                    width: "100%",
                    maxWidth: 600,
                    p: 4,
                    borderRadius: 3,
                    boxShadow: 3,
                    backgroundColor: "#f9f9f9",
                }}
            >
                <Stack spacing={3} alignItems="center">
                    <Avatar sx={{ width: 100, height: 100 }}>JD</Avatar>
                    <Typography variant="h5">{profile.name}</Typography>
                    <Typography color="text.secondary">{profile.role}</Typography>

                    <Divider sx={{ width: "100%" }} />

                    <Box sx={{ width: "100%" }}>
                        <Typography variant="subtitle2">Email</Typography>
                        <Typography sx={{ mb: 2 }}>{profile.email}</Typography>

                        <Typography variant="subtitle2">Phone</Typography>
                        <Typography sx={{ mb: 2 }}>{profile.phone}</Typography>

                        <Typography variant="subtitle2">Company</Typography>
                        <Typography>{profile.company}</Typography>
                    </Box>

                    <Button variant="contained" color="primary">
                        Edit Profile
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
};

