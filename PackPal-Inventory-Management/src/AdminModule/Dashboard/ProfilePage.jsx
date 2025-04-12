// import React, { useState, useEffect } from "react";
// import {
//     Avatar,
//     Card,
//     CardContent,
//     Container,
//     Grid,
//     Typography,
//     Box,
//     Divider,
//     CircularProgress,
//     Alert,
// } from "@mui/material";
// import { Navbar } from "../Layout/Navbar";
// import axios from "axios";

// export const ProfilePage = () => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         const fetchUserProfile = async () => {
//             const token = localStorage.getItem("authToken");
//             if (!token) {
//                 setError("No token found. Redirecting to login...");
//                 setLoading(false);
//                 return;
//             }

//             try {
//                 const response = await axios.get("http://localhost:8000/admin/profile/", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 setUser(response.data.user);
//             } catch (err) {
//                 setError(err.response?.data?.detail || "Failed to fetch profile.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUserProfile();
//     }, []);

//     if (loading) {
//         return (
//             <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     if (error) {
//         return (
//             <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//                 <Alert severity="error">{error}</Alert>
//             </Box>
//         );
//     }

//     return (
//         <>
//             <Navbar />
//             <Container maxWidth="md" sx={{ mt: 16 }}>
//                 <Card elevation={5}>
//                     <CardContent>
//                         <Grid container spacing={3} alignItems="center">
//                             <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
//                                 <Avatar
//                                     alt={user?.name}
//                                     src={user?.profile_image || "https://via.placeholder.com/150"}
//                                     sx={{ width: 120, height: 120, margin: "0 auto", boxShadow: 3 }}
//                                 />
//                                 <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
//                                     {user?.name}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     {user?.role || "Admin"}
//                                 </Typography>
//                             </Grid>

//                             <Grid item xs={12} md={8}>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={6}>
//                                         <Typography variant="body1">
//                                             <strong>Email:</strong> {user?.email}
//                                         </Typography>
//                                     </Grid>
//                                     <Grid item xs={6}>
//                                         <Typography variant="body1">
//                                             <strong>Phone:</strong> {user?.phone || "N/A"}
//                                         </Typography>
//                                     </Grid>
//                                     <Grid item xs={6}>
//                                         <Typography variant="body1">
//                                             <strong>Joined:</strong> {user?.joined || "N/A"}
//                                         </Typography>
//                                     </Grid>
//                                     <Grid item xs={6}>
//                                         <Typography variant="body1">
//                                             <strong>Last Login:</strong> {user?.last_login || "N/A"}
//                                         </Typography>
//                                     </Grid>
//                                     <Grid item xs={12}>
//                                         <Typography variant="body1">
//                                             <strong>Status:</strong>{" "}
//                                             <span style={{ color: user?.status === "Active" ? "green" : "red", fontWeight: "bold" }}>
//                                                 {user?.status || "Inactive"}
//                                             </span>
//                                         </Typography>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                         </Grid>

//                         <Box my={4}>
//                             <Divider />
//                         </Box>

//                         <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
//                             About
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                             {user?.about ||
//                                 "This user is responsible for managing system-wide settings, user permissions, and monitoring platform performance."}
//                         </Typography>

//                         <Box mt={4}>
//                             <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
//                                 Admin Responsibilities
//                             </Typography>
//                             <ul style={{ paddingLeft: "1.2rem", color: "#555" }}>
//                                 <li>Managing user accounts and roles</li>
//                                 <li>Controlling system-wide configurations</li>
//                                 <li>Monitoring logs and platform performance</li>
//                                 <li>Approving provider registrations</li>
//                                 <li>Ensuring system security and updates</li>
//                                 <li>Coordinating with dev & support teams</li>
//                             </ul>
//                         </Box>
//                     </CardContent>
//                 </Card>
//             </Container>
//         </>
//     );
// };



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
} from "@mui/material";
import { Navbar } from "../Layout/Navbar";

export const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // Simulate API call with mock data
        const fetchUserProfile = async () => {
            setLoading(true);
            try {
                // Mock data to simulate backend response
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

                // Simulate a delay
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
            <Container maxWidth="md" sx={{ mt: 16 }}>
                <Card elevation={5}>
                    <CardContent>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                                <Avatar
                                    alt={user?.name}
                                    src={user?.profile_image || "https://via.placeholder.com/150"}
                                    sx={{ width: 120, height: 120, margin: "0 auto", boxShadow: 3 }}
                                />
                                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                                    {user?.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {user?.role || "Admin"}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Typography variant="body1">
                                            <strong>Email:</strong> {user?.email}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body1">
                                            <strong>Phone:</strong> {user?.phone || "N/A"}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body1">
                                            <strong>Joined:</strong> {user?.joined || "N/A"}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body1">
                                            <strong>Last Login:</strong> {user?.last_login || "N/A"}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body1">
                                            <strong>Status:</strong>{" "}
                                            <span style={{ color: user?.status === "Active" ? "green" : "red", fontWeight: "bold" }}>
                                                {user?.status || "Inactive"}
                                            </span>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Box my={4}>
                            <Divider />
                        </Box>

                        <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                            About
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user?.about ||
                                "This user is responsible for managing system-wide settings, user permissions, and monitoring platform performance."}
                        </Typography>

                        <Box mt={4}>
                            <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                                Admin Responsibilities
                            </Typography>
                            <ul style={{ paddingLeft: "1.2rem", color: "#555" }}>
                                <li>Managing user accounts and roles</li>
                                <li>Controlling system-wide configurations</li>
                                <li>Monitoring logs and platform performance</li>
                                <li>Approving provider registrations</li>
                                <li>Ensuring system security and updates</li>
                                <li>Coordinating with dev & support teams</li>
                            </ul>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};