import React from "react";
import { Footer } from "./Layout/Footer";
import { Navbar } from "./Layout/Navbar";
import {
    Box,
    Typography,
    Container,
    Grid,
    Paper,
    Card,
    CardContent,
    CardActions,
    Button,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const OwnerLandingPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const navigate = useNavigate();

    return (
        <>
            {/* Navbar */}
            <Box sx={{ position: "sticky", top: 0, zIndex: 10 }}>
                {/* <Navbar /> */}
            </Box>

            <Container
                maxWidth="lg"
                sx={{
                    mt: { xs: 2, sm: 4, md: 5 },
                    mb: 4,
                    px: { xs: 2, sm: 3 },
                }}
            >
                {/* Welcome Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            p: { xs: 2, sm: 3, md: 4 },
                            borderRadius: 2,
                            background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
                            mb: 4,
                        }}
                    >
                        <Typography
                            variant={isMobile ? "h5" : "h4"}
                            gutterBottom
                            textAlign="center"
                            sx={{
                                fontWeight: "bold",
                                color: theme.palette.primary.main,
                                mb: 2,
                                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                            }}
                        >
                            Welcome to the Owner Dashboard
                        </Typography>
                        <Typography
                            variant="body1"
                            textAlign="center"
                            sx={{
                                color: theme.palette.text.secondary,
                                mb: 2,
                            }}
                        >
                            Manage your orders, track inventory, and collaborate with wholesalers
                            seamlessly.
                        </Typography>
                    </Paper>
                </motion.div>

                {/* Features Section */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
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
                                    Create Orders
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Quickly create and manage orders for your business needs.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    onClick={() => navigate("/owner/neworder")}
                                >
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
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
                                    Track Inventory
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Stay updated on your inventory levels in real-time.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => navigate("/Error")}
                                >
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
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
                                    Owner Analytics
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Gain insights into your business performance                                 </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => navigate("/owner/owneranalytics")}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </>
    );
};