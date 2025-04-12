// import React, { useEffect, useState } from "react";
// import {
//     Container,
//     Typography,
//     CircularProgress,
//     Alert,
//     Table,
//     TableHead,
//     TableRow,
//     TableCell,
//     TableBody,
//     Paper,
//     TableContainer,
//     Box,
//     Button,
// } from "@mui/material";

// export const AllEmpUsers = () => {
//     const [providers, setProviders] = useState([]); // State for provider users
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     // Fetch all provider users
//     useEffect(() => {
//         const fetchProviders = async () => {
//             try {
//                 const token = localStorage.getItem("authToken");
//                 const response = await fetch("http://localhost:8000/providers/", { // Updated API endpoint
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (!response.ok) {
//                     throw new Error("Failed to fetch provider users");
//                 }

//                 const data = await response.json();
//                 setProviders(data); // Set provider users
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProviders();
//     }, []);

//     // Delete provider user by ID
//     const handleDelete = async (providerId) => {
//         const confirmDelete = window.confirm("Are you sure you want to delete this provider?");
//         if (!confirmDelete) return;

//         try {
//             const token = localStorage.getItem("authToken");
//             const response = await fetch(`http://localhost:8000/provider/${providerId}`, { // Updated delete endpoint
//                 method: "DELETE",
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             if (!response.ok) {
//                 throw new Error("Failed to delete provider user");
//             }

//             // Remove the deleted provider from the state
//             setProviders(providers.filter((provider) => provider._id !== providerId));
//             alert("Provider deleted successfully!");
//         } catch (err) {
//             alert(err.message);
//         }
//     };

//     return (
//         <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
//             <Typography
//                 variant="h4"
//                 gutterBottom
//                 textAlign="center"
//                 sx={{
//                     fontWeight: "bold",
//                     color: "#1976d2",
//                     mb: 3,
//                     textTransform: "uppercase",
//                 }}
//             >
//                 All Registered Providers
//             </Typography>

//             {loading && (
//                 <Box display="flex" justifyContent="center" mt={4}>
//                     <CircularProgress color="primary" />
//                 </Box>
//             )}

//             {error && (
//                 <Alert severity="error" sx={{ mt: 3 }}>
//                     {error}
//                 </Alert>
//             )}

//             {!loading && !error && (
//                 <>
//                     {providers.length === 0 ? (
//                         <Typography
//                             variant="body1"
//                             align="center"
//                             mt={4}
//                             sx={{ color: "#555" }}
//                         >
//                             No providers found.
//                         </Typography>
//                     ) : (
//                         <TableContainer
//                             component={Paper}
//                             sx={{
//                                 mt: 4,
//                                 boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//                                 borderRadius: "8px",
//                             }}
//                         >
//                             <Table>
//                                 <TableHead
//                                     sx={{
//                                         backgroundColor: "#f5f5f5",
//                                     }}
//                                 >
//                                     <TableRow>
//                                         <TableCell
//                                             sx={{
//                                                 fontWeight: "bold",
//                                                 color: "#333",
//                                             }}
//                                         >
//                                             #
//                                         </TableCell>
//                                         <TableCell
//                                             sx={{
//                                                 fontWeight: "bold",
//                                                 color: "#333",
//                                             }}
//                                         >
//                                             ID
//                                         </TableCell>
//                                         <TableCell
//                                             sx={{
//                                                 fontWeight: "bold",
//                                                 color: "#333",
//                                             }}
//                                         >
//                                             Name
//                                         </TableCell>
//                                         <TableCell
//                                             sx={{
//                                                 fontWeight: "bold",
//                                                 color: "#333",
//                                             }}
//                                         >
//                                             Email
//                                         </TableCell>
//                                         <TableCell
//                                             sx={{
//                                                 fontWeight: "bold",
//                                                 color: "#333",
//                                             }}
//                                         >
//                                             Password
//                                         </TableCell>
//                                         <TableCell
//                                             sx={{
//                                                 fontWeight: "bold",
//                                                 color: "#333",
//                                             }}
//                                         >
//                                             Service Type
//                                         </TableCell>
//                                         <TableCell
//                                             sx={{
//                                                 fontWeight: "bold",
//                                                 color: "#333",
//                                             }}
//                                         >
//                                             Actions
//                                         </TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {providers.map((provider, index) => (
//                                         <TableRow
//                                             key={provider._id}
//                                             sx={{
//                                                 "&:nth-of-type(odd)": {
//                                                     backgroundColor: "#f9f9f9",
//                                                 },
//                                                 "&:hover": {
//                                                     backgroundColor: "#f1f1f1",
//                                                 },
//                                             }}
//                                         >
//                                             <TableCell>{index + 1}</TableCell> {/* Display index */}
//                                             <TableCell>{provider._id}</TableCell>
//                                             <TableCell>{provider.name}</TableCell>
//                                             <TableCell>{provider.email}</TableCell>
//                                             <TableCell>{provider.password}</TableCell> {/* Display password */}
//                                             <TableCell>{provider.serviceType}</TableCell>
//                                             <TableCell>
//                                                 <Button
//                                                     variant="contained"
//                                                     color="error"
//                                                     size="small"
//                                                     onClick={() =>
//                                                         handleDelete(provider._id)
//                                                     }
//                                                     sx={{
//                                                         textTransform: "none",
//                                                         fontWeight: "bold",
//                                                     }}
//                                                 >
//                                                     Delete
//                                                 </Button>
//                                             </TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </TableContainer>
//                     )}
//                 </>
//             )}
//         </Container>
//     );
// };

import React, { useEffect, useState } from "react";
import {
    Container,
    Typography,
    CircularProgress,
    Alert,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    TableContainer,
    Box,
    Button,
} from "@mui/material";

export const AllEmpUsers = () => {
    const [providers, setProviders] = useState([]); // State for provider users
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Simulate fetching provider users
    useEffect(() => {
        const fetchProviders = async () => {
            setLoading(true);
            try {
                // Mock data to simulate backend response
                const mockData = [
                    {
                        _id: "1",
                        name: "John Doe",
                        email: "john.doe@example.com",
                        password: "password123",
                        serviceType: "IT Support",
                    },
                    {
                        _id: "2",
                        name: "Jane Smith",
                        email: "jane.smith@example.com",
                        password: "password456",
                        serviceType: "HR Services",
                    },
                    {
                        _id: "3",
                        name: "Alice Johnson",
                        email: "alice.johnson@example.com",
                        password: "password789",
                        serviceType: "Finance",
                    },
                ];

                // Simulate a delay
                await new Promise((resolve) => setTimeout(resolve, 1000));

                setProviders(mockData); // Set mock data
            } catch (err) {
                setError("Failed to fetch provider users. This is a mock error.");
            } finally {
                setLoading(false);
            }
        };

        fetchProviders();
    }, []);

    // Delete provider user by ID
    const handleDelete = (providerId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this provider?");
        if (!confirmDelete) return;

        // Simulate deletion by filtering out the provider
        setProviders(providers.filter((provider) => provider._id !== providerId));
        alert("Provider deleted successfully!");
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
            <Typography
                variant="h4"
                gutterBottom
                textAlign="center"
                sx={{
                    fontWeight: "bold",
                    color: "#1976d2",
                    mb: 3,
                    textTransform: "uppercase",
                }}
            >
                All Registered Providers
            </Typography>

            {loading && (
                <Box display="flex" justifyContent="center" mt={4}>
                    <CircularProgress color="primary" />
                </Box>
            )}

            {error && (
                <Alert severity="error" sx={{ mt: 3 }}>
                    {error}
                </Alert>
            )}

            {!loading && !error && (
                <>
                    {providers.length === 0 ? (
                        <Typography
                            variant="body1"
                            align="center"
                            mt={4}
                            sx={{ color: "#555" }}
                        >
                            No providers found.
                        </Typography>
                    ) : (
                        <TableContainer
                            component={Paper}
                            sx={{
                                mt: 4,
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                borderRadius: "8px",
                            }}
                        >
                            <Table>
                                <TableHead
                                    sx={{
                                        backgroundColor: "#f5f5f5",
                                    }}
                                >
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                fontWeight: "bold",
                                                color: "#333",
                                            }}
                                        >
                                            #
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                fontWeight: "bold",
                                                color: "#333",
                                            }}
                                        >
                                            ID
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                fontWeight: "bold",
                                                color: "#333",
                                            }}
                                        >
                                            Name
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                fontWeight: "bold",
                                                color: "#333",
                                            }}
                                        >
                                            Email
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                fontWeight: "bold",
                                                color: "#333",
                                            }}
                                        >
                                            Password
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                fontWeight: "bold",
                                                color: "#333",
                                            }}
                                        >
                                            Service Type
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                fontWeight: "bold",
                                                color: "#333",
                                            }}
                                        >
                                            Actions
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {providers.map((provider, index) => (
                                        <TableRow
                                            key={provider._id}
                                            sx={{
                                                "&:nth-of-type(odd)": {
                                                    backgroundColor: "#f9f9f9",
                                                },
                                                "&:hover": {
                                                    backgroundColor: "#f1f1f1",
                                                },
                                            }}
                                        >
                                            <TableCell>{index + 1}</TableCell> {/* Display index */}
                                            <TableCell>{provider._id}</TableCell>
                                            <TableCell>{provider.name}</TableCell>
                                            <TableCell>{provider.email}</TableCell>
                                            <TableCell>{provider.password}</TableCell> {/* Display password */}
                                            <TableCell>{provider.serviceType}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="error"
                                                    size="small"
                                                    onClick={() =>
                                                        handleDelete(provider._id)
                                                    }
                                                    sx={{
                                                        textTransform: "none",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </>
            )}
        </Container>
    );
};