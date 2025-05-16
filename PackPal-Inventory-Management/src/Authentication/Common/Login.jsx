import React from "react";
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
import ColorModeSelect from "../../shared-theme/ColorModeSelect";
import { GoogleIcon, FacebookIcon, SitemarkIcon } from "../Components/Customicons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateInputs()) {
            return;
        }

        const data = new FormData(event.currentTarget);
        const email = data.get("email");
        const password = data.get("password");

        try {
            const response = await axios.post("http://localhost:8000/login", { email, password });
            console.log("Login Response:", response.data);

            if (response.data.role) {
                storeUserCredentials(response.data.access_token, email, response.data.role);
                // Navigate based on role
                if (response.data.role.name === "Admin") {
                    navigate("/AdminLanding");
                } else if (response.data.role.name === "Owner") {
                    navigate("/owner");
                } else if (response.data.role.name === "Employee") {
                    navigate("/employee");
                } else {
                    alert("Invalid role. Please contact support.");
                }
            } else {
                alert("Login failed: No token or role received.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert(`Login failed: ${error.response?.data?.message || error.message}`);
        }
    };

    const storeUserCredentials = (token, email, role) => {
        localStorage.setItem("authToken", token);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userRole", role.name); // Store role name
        alert("Login Successful");
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
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    }));

    const LogInContainer = styled(Stack)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "relative",
        padding: theme.spacing(2),
        background: "radial-gradient(circle, #f0f4f8, #ffffff)",
    }));

    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <LogInContainer direction="column" justifyContent="space-between">
                <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />
                <Card variant="inlined">
                    <SitemarkIcon />
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            width: "100%",
                            fontSize: "clamp(2rem, 10vw, 2.15rem)",
                            textAlign: "center",
                        }}
                    >
                        Sign in
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
                            <FormLabel htmlFor="email">Email</FormLabel>
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
                                color={emailError ? "error" : "primary"}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
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
                                color={passwordError ? "error" : "primary"}
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

                        <Button type="submit" fullWidth variant="contained">
                            Sign in
                        </Button>

                        <Link
                            component="button"
                            type="button"
                            onClick={handleClickOpen}
                            variant="body2"
                            sx={{ alignSelf: "center" }}
                        >
                            Forgot your password?
                        </Link>
                    </Box>

                    <Divider>or</Divider>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => alert("Sign in with Google")}
                            startIcon={<GoogleIcon />}
                        >
                            Sign in with Google
                        </Button>

                  

                        <Typography sx={{ textAlign: "center" }}>
                            Don&apos;t have an account?{" "}
                            <Link href="/signup" variant="body2" sx={{ alignSelf: "center" }}>
                                Sign up
                            </Link>
                        </Typography>
                    </Box>
                </Card>
            </LogInContainer>
        </AppTheme>
    );
};