import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { ForgotPassword } from "../Components/ForgotPassword";
import AppTheme from "../../shared-theme/AppTheme";
import ColorModeSelect from "../../shared-theme/ColorModeIconDropdown";
import { GoogleIcon, FacebookIcon } from "../Components/Customicons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
{/* do it later for Google authentication import { GoogleLogin, googleLogout } from "@react-oauth/google"; */}

export const EmployeeLogin = (props) => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateInputs()) {
            return;
        }

        const data = new FormData(event.currentTarget);
        const email = data.get("email");
        const password = data.get("password");

        try {
            const response = await axios.post("http://localhost:8000/Employee/login/", { email, password });

            if (response.data.access_token) {
                storeUserCredentials(response.data.access_token, email);
                navigate("/UserProfile");
            } else {
                alert("Login failed: No token received.");
            }
        } catch (error) {
            console.error(error);
            alert(`Login failed: ${error.response?.data?.message || error.message}`);
        }
    };

    const storeUserCredentials = (token, email) => {
        localStorage.setItem("authToken", token);
        localStorage.setItem("userEmail", email);
        alert("Login Successful");
    };

    const validateInputs = () => {
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage("Please enter a valid email address.");
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage("");
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage("Password must be at least 6 characters long.");
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage("");
        }

        return isValid;
    };

    const Card = styled(MuiCard)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "450px",
        padding: theme.spacing(4),
        gap: theme.spacing(2),
        margin: "auto",
        backgroundColor: "#ffffff", // White background
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
    }));

    const LogInContainer = styled(Stack)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "relative",
        padding: theme.spacing(2),
        backgroundColor: "#e8f5e9", // Light green background
    }));

    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <LogInContainer direction="column" justifyContent="space-between">
                <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />
                <Card variant="inlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            width: "100%",
                            fontSize: "clamp(2rem, 10vw, 2.15rem)",
                            textAlign: "center",
                            color: "#2e7d32", // Dark green text
                        }}
                    >
                        User Sign in
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="email" sx={{ color: "#2e7d32" }}>Email</FormLabel>
                            <TextField
                                sx={{ width: "390px" }}
                                error={emailError}
                                helperText={emailErrorMessage}
                                id="email"
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                autoComplete="email"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={emailError ? "error" : "success"}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="password" sx={{ color: "#2e7d32" }}>Password</FormLabel>
                            <TextField
                                error={passwordError}
                                helperText={passwordErrorMessage}
                                name="password"
                                placeholder="••••••"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                required
                                fullWidth
                                variant="outlined"
                                color={passwordError ? "error" : "success"}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        id="check"
                                        onChange={(e) => {
                                            const pass = document.getElementById("password");
                                            pass.type = e.target.checked ? "text" : "password";
                                        }}
                                    />
                                }
                                label="Show Password"
                            />
                        </FormControl>

                        <ForgotPassword open={open} handleClose={handleClose} />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: "#2e7d32", // Dark green button
                                color: "#ffffff", // White text
                                "&:hover": {
                                    backgroundColor: "#1b5e20", // Darker green on hover
                                },
                            }}
                        >
                            Sign in
                        </Button>

                        <Link
                            component="button"
                            type="button"
                            onClick={handleClickOpen}
                            variant="body2"
                            sx={{ alignSelf: "center", color: "#2e7d32" }}
                        >
                            Forgot your password?
                        </Link>
                    </Box>

                    
                        </Typography>
                    </Box>
                </Card>
            </LogInContainer>
        </AppTheme>
    );
};