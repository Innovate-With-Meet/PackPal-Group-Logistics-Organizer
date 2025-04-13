// import React, { useState, useEffect } from "react";
// import {
//     Box,
//     Typography,
//     Grid,
//     Paper,
//     CircularProgress,
//     Card,
//     CardContent,
//     useTheme,
//     useMediaQuery,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import axios from "axios";

// export const OwnerAnalytics = () => {
//     const [analyticsData, setAnalyticsData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//     useEffect(() => {
//         // Fetch analytics data from the server
//         const fetchAnalyticsData = async () => {
//             try {
//                 const response = await axios.get("http://localhost:8000/owner/analytics");
//                 setAnalyticsData(response.data);
//             } catch (err) {
//                 setError("Failed to load analytics data. Please try again later.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAnalyticsData();
//     }, []);

//     if (loading) {
//         return (
//             <Box
//                 sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     height: "100vh",
//                 }}
//             >
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     if (error) {
//         return (
//             <Box
//                 sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     height: "100vh",
//                 }}
//             >
//                 <Typography color="error">{error}</Typography>
//             </Box>
//         );
//     }

//     return (
//         <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
//             <Typography
//                 variant={isMobile ? "h5" : "h4"}
//                 gutterBottom
//                 textAlign="center"
//                 sx={{
//                     fontWeight: "bold",
//                     color: theme.palette.primary.main,
//                     mb: 3,
//                     textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
//                 }}
//             >
//                 Owner Analytics Dashboard
//             </Typography>

//             <Grid container spacing={3}>
//                 {/* Example Analytics Card 1 */}
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Card
//                         sx={{
//                             boxShadow: 3,
//                             borderRadius: 2,
//                             "&:hover": { boxShadow: 6 },
//                         }}
//                     >
//                         <CardContent>
//                             <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
//                                 Total Orders
//                             </Typography>
//                             <Typography variant="h4" color="primary">
//                                 {analyticsData.totalOrders || 0}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* Example Analytics Card 2 */}
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Card
//                         sx={{
//                             boxShadow: 3,
//                             borderRadius: 2,
//                             "&:hover": { boxShadow: 6 },
//                         }}
//                     >
//                         <CardContent>
//                             <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
//                                 Total Revenue
//                             </Typography>
//                             <Typography variant="h4" color="primary">
//                                 ${analyticsData.totalRevenue || 0}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* Example Analytics Card 3 */}
//                 <Grid item xs={12} sm={6} md={4}>
//                     <Card
//                         sx={{
//                             boxShadow: 3,
//                             borderRadius: 2,
//                             "&:hover": { boxShadow: 6 },
//                         }}
//                     >
//                         <CardContent>
//                             <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
//                                 Active Wholesalers
//                             </Typography>
//                             <Typography variant="h4" color="primary">
//                                 {analyticsData.activeWholesalers || 0}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };


import React from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    Divider,
    useTheme,
    useMediaQuery,
} from "@mui/material";

export const OwnerAnalytics = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    // Static analytics data
    const analyticsData = {
        totalOrders: 120,
        totalRevenue: 45000,
        activeWholesalers: 15,
        pendingOrders: 10,
        completedOrders: 110,
        topSellingProduct: "Product A",
    };

    return (
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <Typography
                variant={isMobile ? "h5" : "h4"}
                gutterBottom
                textAlign="center"
                sx={{
                    fontWeight: "bold",
                    color: theme.palette.primary.main,
                    mb: 3,
                    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                }}
            >
                Owner Analytics Dashboard
            </Typography>

            <Grid container spacing={3}>
                {/* Total Orders Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        sx={{
                            boxShadow: 3,
                            borderRadius: 2,
                            "&:hover": { boxShadow: 6 },
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                Total Orders
                            </Typography>
                            <Typography variant="h4" color="primary">
                                {analyticsData.totalOrders}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Total Revenue Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        sx={{
                            boxShadow: 3,
                            borderRadius: 2,
                            "&:hover": { boxShadow: 6 },
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                Total Revenue
                            </Typography>
                            <Typography variant="h4" color="primary">
                                ${analyticsData.totalRevenue}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Active Wholesalers Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        sx={{
                            boxShadow: 3,
                            borderRadius: 2,
                            "&:hover": { boxShadow: 6 },
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                Active Wholesalers
                            </Typography>
                            <Typography variant="h4" color="primary">
                                {analyticsData.activeWholesalers}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Pending Orders Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        sx={{
                            boxShadow: 3,
                            borderRadius: 2,
                            "&:hover": { boxShadow: 6 },
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                Pending Orders
                            </Typography>
                            <Typography variant="h4" color="warning.main">
                                {analyticsData.pendingOrders}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Completed Orders Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        sx={{
                            boxShadow: 3,
                            borderRadius: 2,
                            "&:hover": { boxShadow: 6 },
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                Completed Orders
                            </Typography>
                            <Typography variant="h4" color="success.main">
                                {analyticsData.completedOrders}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Top Selling Product Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        sx={{
                            boxShadow: 3,
                            borderRadius: 2,
                            "&:hover": { boxShadow: 6 },
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                Top Selling Product
                            </Typography>
                            <Typography variant="h4" color="primary">
                                {analyticsData.topSellingProduct}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Divider and Additional Actions */}
            <Divider sx={{ my: 4 }} />
            <Box sx={{ textAlign: "center" }}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        mx: 1,
                        py: 1,
                        px: 3,
                        fontWeight: "bold",
                        borderRadius: 2,
                    }}
                >
                    View Detailed Reports
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    sx={{
                        mx: 1,
                        py: 1,
                        px: 3,
                        fontWeight: "bold",
                        borderRadius: 2,
                    }}
                >
                    Export Data
                </Button>
            </Box>
        </Box>
    );
};