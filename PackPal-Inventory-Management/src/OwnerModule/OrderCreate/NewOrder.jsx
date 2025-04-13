import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Paper,
    CircularProgress,
    Container,
    Alert,
    Snackbar,
} from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";

export const NewOrder = () => {
    const [orderDetails, setOrderDetails] = useState({
        productName: "",
        quantity: "",
        wholesalerName: "",
    });
    const [loading, setLoading] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!orderDetails.productName || !orderDetails.quantity || !orderDetails.wholesalerName) {
            setErrorMessage("All fields are required.");
            return;
        }

        setLoading(true);
        setErrorMessage("");

        try {
            const response = await axios.post("http://localhost:8000/orders", orderDetails);
            console.log("Order Response:", response.data);

            if (response.status === 201) {
                setSuccessAlert(true);
                setOrderDetails({
                    productName: "",
                    quantity: "",
                    wholesalerName: "",
                });
            } else {
                setErrorMessage("Failed to create order. Please try again.");
            }
        } catch (error) {
            console.error("Error creating order:", error);
            setErrorMessage("An error occurred while creating the order. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: 2, sm: 3, md: 4 },
                        borderRadius: 2,
                        background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
                    }}
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                        textAlign="center"
                        sx={{
                            fontWeight: "bold",
                            color: "#1976d2",
                            mb: 3,
                            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                        }}
                    >
                        Create a New Order
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Product Name"
                                    name="productName"
                                    value={orderDetails.productName}
                                    onChange={handleInputChange}
                                    fullWidth
                                    required
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Quantity"
                                    name="quantity"
                                    type="number"
                                    value={orderDetails.quantity}
                                    onChange={handleInputChange}
                                    fullWidth
                                    required
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Wholesaler Name"
                                    name="wholesalerName"
                                    value={orderDetails.wholesalerName}
                                    onChange={handleInputChange}
                                    fullWidth
                                    required
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        disabled={loading}
                                        sx={{
                                            py: 1.5,
                                            fontSize: "1.1rem",
                                            fontWeight: "bold",
                                            borderRadius: 2,
                                            boxShadow: 2,
                                            "&:hover": {
                                                boxShadow: 4,
                                            },
                                            position: "relative",
                                        }}
                                    >
                                        {loading ? (
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <CircularProgress size={24} sx={{ color: "white", mr: 1 }} />
                                                Submitting...
                                            </Box>
                                        ) : (
                                            "Create Order"
                                        )}
                                    </Button>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Box>

                    {errorMessage && (
                        <Typography
                            variant="body1"
                            color="error.main"
                            textAlign="center"
                            sx={{ mt: 2 }}
                        >
                            {errorMessage}
                        </Typography>
                    )}
                </Paper>
            </motion.div>

            {/* Success Alert */}
            <Snackbar
                open={successAlert}
                autoHideDuration={6000}
                onClose={() => setSuccessAlert(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setSuccessAlert(false)}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    Order created successfully!
                </Alert>
            </Snackbar>
        </Container>
    );
};