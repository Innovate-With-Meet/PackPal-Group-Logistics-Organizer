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

// export const AllUsers = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     // Fetch all users
//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const token = localStorage.getItem("authToken");
//                 const response = await fetch("http://localhost:8000/users/", {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (!response.ok) {
//                     throw new Error("Failed to fetch users");
//                 }

//                 const data = await response.json();
//                 setUsers(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUsers();
//     }, []);

//     // Delete user by ID
//     const handleDelete = async (userId) => {
//         const confirmDelete = window.confirm("Are you sure you want to delete this user?");
//         if (!confirmDelete) return;

//         try {
//             const token = localStorage.getItem("authToken");
//             const response = await fetch(`http://localhost:8000/user/${userId}`, {
//                 method: "DELETE",
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             if (!response.ok) {
//                 throw new Error("Failed to delete user");
//             }

//             // Remove the deleted user from the state
//             setUsers(users.filter((user) => user._id !== userId));
//             alert("User deleted successfully!");
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
//                 All Registered Users
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
//                     {users.length === 0 ? (
//                         <Typography
//                             variant="body1"
//                             align="center"
//                             mt={4}
//                             sx={{ color: "#555" }}
//                         >
//                             No users found.
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
//                                             Address
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
//                                     {users.map((user) => (
//                                         <TableRow
//                                             key={user._id}
//                                             sx={{
//                                                 "&:nth-of-type(odd)": {
//                                                     backgroundColor: "#f9f9f9",
//                                                 },
//                                                 "&:hover": {
//                                                     backgroundColor: "#f1f1f1",
//                                                 },
//                                             }}
//                                         >
//                                             <TableCell>{user._id}</TableCell>
//                                             <TableCell>{user.name}</TableCell>
//                                             <TableCell>{user.email}</TableCell>
//                                             <TableCell>{user.address}</TableCell>
//                                             <TableCell>
//                                                 <Button
//                                                     variant="contained"
//                                                     color="error"
//                                                     size="small"
//                                                     onClick={() =>
//                                                         handleDelete(user._id)
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

export const AllUsers = () => {
    const [users, setUsers] = useState([]); // State for users
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Simulate fetching users
    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                // Mock data to simulate backend response
                const mockData = [
                    {
                        _id: "1",
                        name: "John Doe",
                        email: "john.doe@example.com",
                        address: "123 Main St, Cityville",
                    },
                    {
                        _id: "2",
                        name: "Jane Smith",
                        email: "jane.smith@example.com",
                        address: "456 Elm St, Townsville",
                    },
                    {
                        _id: "3",
                        name: "Alice Johnson",
                        email: "alice.johnson@example.com",
                        address: "789 Oak St, Villageville",
                    },
                ];

                // Simulate a delay
                await new Promise((resolve) => setTimeout(resolve, 1000));

                setUsers(mockData); // Set mock data
            } catch (err) {
                setError("Failed to fetch users. This is a mock error.");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // Delete user by ID
    const handleDelete = (userId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        // Simulate deletion by filtering out the user
        setUsers(users.filter((user) => user._id !== userId));
        alert("User deleted successfully!");
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
                All Registered Users
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
                    {users.length === 0 ? (
                        <Typography
                            variant="body1"
                            align="center"
                            mt={4}
                            sx={{ color: "#555" }}
                        >
                            No users found.
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
                                            Address
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
                                    {users.map((user) => (
                                        <TableRow
                                            key={user._id}
                                            sx={{
                                                "&:nth-of-type(odd)": {
                                                    backgroundColor: "#f9f9f9",
                                                },
                                                "&:hover": {
                                                    backgroundColor: "#f1f1f1",
                                                },
                                            }}
                                        >
                                            <TableCell>{user._id}</TableCell>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.address}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="error"
                                                    size="small"
                                                    onClick={() =>
                                                        handleDelete(user._id)
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