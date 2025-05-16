import { Link } from "react-router-dom";
import * as React from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import { ThreeDRotation } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ColorModeIconDropdown from "../shared-theme/ColorModeIconDropdown"

const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutus" },
    // { name: "Services", path: "/services" },
    { name: "Admin", path: "/admin/" },
    { name: "Owner", path: "/owner/" },


    // { name: "Contact", path: "/contact" },
    
    // { name: "Provider", path: "/provider" },

    
    
    // { name: "1.Provider-Request", path: "/ProviderRequestPage" },
    // { name: "2.Dashboard", path: "/dashboard" },
    




];

const settings = ["Dashboard", "UserProfile"];
// const settings = ["Account", "Dashboard", "Logout", "UserProfile"];


export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElLogin, setAnchorElLogin] = React.useState(null);
    const [anchorElSignup, setAnchorElSignup] = React.useState(null);

    const navigate = useNavigate();

    // Menu Open/Close Handlers
    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleOpenLoginMenu = (event) => setAnchorElLogin(event.currentTarget);
    const handleOpenSignupMenu = (event) => setAnchorElSignup(event.currentTarget);

    const handleCloseNavMenu = () => setAnchorElNav(null);
    const handleCloseUserMenu = () => setAnchorElUser(null);
    const handleCloseLoginMenu = () => setAnchorElLogin(null);
    const handleCloseSignupMenu = () => setAnchorElSignup(null);

    const handleMenuItemClick = (path) => {
        navigate(path);
        handleCloseLoginMenu();
        handleCloseSignupMenu();
    };

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: "#2e7d32", zIndex: 1000 }}> {/* Green background */}
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            component={Link}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".2rem",
                                color: "white", // White text
                                textDecoration: "none",
                            }}
                        >
                            <ThreeDRotation />
                        </Typography>

                        {/* === Mobile Menu Icon === */}
                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorElNav}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: "block", md: "none" } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                        <Typography
                                            component={Link}
                                            to={page.path}
                                            sx={{ textDecoration: "none", color: "#2e7d32" }} // Green text
                                        >
                                            {page.name}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* === Desktop Menu Links === */}
                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.name}
                                    component={Link}
                                    to={page.path}
                                    sx={{
                                        my: 2,
                                        color: "white", // White text
                                        "&:hover": { backgroundColor: "#1b5e20" }, // Dark green hover
                                    }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>

                        <Stack>
                            <Box sx={{ flexGrow: 0, mx: 2 }}>
                                <ColorModeIconDropdown />
                            </Box>
                        </Stack>

                        {/* === Login Dropdown === */}
                        <Box sx={{ flexGrow: 0, mx: 2 }}>
                            <Button
                                id="login-button"
                                aria-controls={Boolean(anchorElLogin) ? "login-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={Boolean(anchorElLogin) ? "true" : undefined}
                                onClick={handleOpenLoginMenu}
                                sx={{
                                    color: "white",
                                    border: "1px solid white",
                                    borderRadius: "4px",
                                    "&:hover": { backgroundColor: "#1b5e20" }, // Dark green hover
                                }}
                            >
                                Log In
                            </Button>

                            <Menu
                                id="login-menu"
                                anchorEl={anchorElLogin}
                                open={Boolean(anchorElLogin)}
                                onClose={handleCloseLoginMenu}
                                MenuListProps={{
                                    "aria-labelledby": "login-button",
                                }}
                            >
                                <MenuItem onClick={() => handleMenuItemClick("/Login")}>Admin Login</MenuItem>
                            </Menu>
                        </Box>

                        {/* === Sign Up Dropdown === */}
                        <Box sx={{ flexGrow: 0, mx: 2 }}>
                            <Button
                                id="signup-button"
                                aria-controls={Boolean(anchorElSignup) ? "signup-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={Boolean(anchorElSignup) ? "true" : undefined}
                                onClick={handleOpenSignupMenu}
                                sx={{
                                    color: "white",
                                    border: "1px solid white",
                                    borderRadius: "4px",
                                    "&:hover": { backgroundColor: "#1b5e20" }, // Dark green hover
                                }}
                            >
                                Sign Up
                            </Button>

                            <Menu
                                id="signup-menu"
                                anchorEl={anchorElSignup}
                                open={Boolean(anchorElSignup)}
                                onClose={handleCloseSignupMenu}
                                MenuListProps={{
                                    "aria-labelledby": "signup-button",
                                }}
                            >
                                <MenuItem onClick={() => handleMenuItemClick("/UserSignup")}>User Sign Up</MenuItem>
                                <MenuItem onClick={() => handleMenuItemClick("/AdminSignup")}>Admin Sign Up</MenuItem>
                                <MenuItem onClick={() => handleMenuItemClick("/EmployeeSignup")}>Employee Sign Up</MenuItem>
                            </Menu>
                        </Box>

                        {/* === User Profile Menu === */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorEl={anchorElUser}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                sx={{ mt: "45px" }}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography
                                            component={Link}
                                            to={`/${setting.toLowerCase()}`}
                                            sx={{ textDecoration: "none", color: "#2e7d32" }} // Green text
                                        >
                                            {setting}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Spacer to prevent content from being hidden behind navbar */}
            <Box sx={{ height: "64px" }} />
        </>
    );
};