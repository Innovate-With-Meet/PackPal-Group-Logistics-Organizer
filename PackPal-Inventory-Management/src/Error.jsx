import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import { useNavigate } from "react-router-dom";

export const Error = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Container
                maxWidth="sm"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    textAlign: "center",
                }}
            >
                <Box sx={{ mb: 3 }}>
                    <ConstructionIcon sx={{ fontSize: 80, color: "warning.main" }} />
                </Box>
                <Typography variant="h4" gutterBottom>
                    This page is under construction.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    We’re working hard to bring this page to life. Please check back later!
                </Typography>
                <Button variant="contained" color="primary" onClick={() => navigate("/")}>
                    Back to Home
                </Button>
            </Container>
        </div>
    );
};
