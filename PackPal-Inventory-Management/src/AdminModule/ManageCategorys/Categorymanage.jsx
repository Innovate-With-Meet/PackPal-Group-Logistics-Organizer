import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    TextField,
} from '@mui/material';

export const Categorymanage = () => {
    // Dummy data for categories, users, and products
    const [categories, setCategories] = useState([
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Clothing' },
        { id: 3, name: 'Books' },
    ]);

    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
    ]);

    const [products, setProducts] = useState([
        { id: 1, name: 'Laptop' },
        { id: 2, name: 'T-Shirt' },
        { id: 3, name: 'Novel' },
    ]);

    const [assignments, setAssignments] = useState([]);
    const [assignDialogOpen, setAssignDialogOpen] = useState(false);
    const [createProductDialogOpen, setCreateProductDialogOpen] = useState(false);
    const [createUserDialogOpen, setCreateUserDialogOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [newProductName, setNewProductName] = useState('');
    const [newUserName, setNewUserName] = useState('');

    // Open the assignment dialog
    const handleOpenAssignDialog = (category) => {
        setSelectedCategory(category);
        setSelectedUser('');
        setSelectedProduct('');
        setAssignDialogOpen(true);
    };

    // Close the assignment dialog
    const handleCloseAssignDialog = () => {
        setAssignDialogOpen(false);
    };

    // Handle assigning a product to a user for a category
    const handleAssign = () => {
        if (!selectedUser || !selectedProduct) return;
        setAssignments((prev) => [
            ...prev,
            {
                category: selectedCategory.name,
                user: selectedUser,
                product: selectedProduct,
            },
        ]);
        handleCloseAssignDialog();
    };

    // Open the create product dialog
    const handleOpenCreateProductDialog = () => {
        setNewProductName('');
        setCreateProductDialogOpen(true);
    };

    // Close the create product dialog
    const handleCloseCreateProductDialog = () => {
        setCreateProductDialogOpen(false);
    };

    // Handle creating a new product
    const handleCreateProduct = () => {
        if (!newProductName) return;
        setProducts((prev) => [
            ...prev,
            { id: prev.length + 1, name: newProductName },
        ]);
        handleCloseCreateProductDialog();
    };

    // Open the create user dialog
    const handleOpenCreateUserDialog = () => {
        setNewUserName('');
        setCreateUserDialogOpen(true);
    };

    // Close the create user dialog
    const handleCloseCreateUserDialog = () => {
        setCreateUserDialogOpen(false);
    };

    // Handle creating a new user
    const handleCreateUser = () => {
        if (!newUserName) return;
        setUsers((prev) => [
            ...prev,
            { id: prev.length + 1, name: newUserName },
        ]);
        handleCloseCreateUserDialog();
    };

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <Typography
                variant="h4"
                sx={{
                    marginBottom: '20px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#1976d2',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                }}
            >
                Category Management
            </Typography>

            {/* Categories Table */}
            <TableContainer component={Paper} sx={{ marginBottom: '20px', boxShadow: 3 }}>
                <Table>
                    <TableHead sx={{ backgroundColor: '#1976d2' }}>
                        <TableRow>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map((category) => (
                            <TableRow key={category.id}>
                                <TableCell>{category.id}</TableCell>
                                <TableCell>{category.name}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() => handleOpenAssignDialog(category)}
                                        sx={{ marginRight: '10px' }}
                                    >
                                        Assign Product to User
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Assignments Table */}
            <Typography
                variant="h5"
                sx={{
                    marginBottom: '10px',
                    fontWeight: 'bold',
                    color: '#1976d2',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                }}
            >
                Assignments
            </Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
                <Table>
                    <TableHead sx={{ backgroundColor: '#1976d2' }}>
                        <TableRow>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Category</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>User</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Product</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {assignments.map((assignment, index) => (
                            <TableRow key={index}>
                                <TableCell>{assignment.category}</TableCell>
                                <TableCell>{assignment.user}</TableCell>
                                <TableCell>{assignment.product}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Create Buttons */}
            <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleOpenCreateProductDialog}
                    sx={{ marginRight: '10px' }}
                >
                    Create New Product
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpenCreateUserDialog}
                >
                    Create New User
                </Button>
            </Box>

            {/* Dialog for Assigning Product to User */}
            <Dialog open={assignDialogOpen} onClose={handleCloseAssignDialog}>
                <DialogTitle sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                    Assign Product to User
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
                        Category: {selectedCategory?.name}
                    </Typography>
                    <FormControl fullWidth sx={{ marginBottom: '10px' }}>
                        <InputLabel>User</InputLabel>
                        <Select
                            value={selectedUser}
                            onChange={(e) => setSelectedUser(e.target.value)}
                        >
                            {users.map((user) => (
                                <MenuItem key={user.id} value={user.name}>
                                    {user.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Product</InputLabel>
                        <Select
                            value={selectedProduct}
                            onChange={(e) => setSelectedProduct(e.target.value)}
                        >
                            {products.map((product) => (
                                <MenuItem key={product.id} value={product.name}>
                                    {product.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAssignDialog} color="secondary" variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={handleAssign} color="primary" variant="contained">
                        Assign
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Dialog for Creating New Product */}
            <Dialog open={createProductDialogOpen} onClose={handleCloseCreateProductDialog}>
                <DialogTitle sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                    Create New Product
                </DialogTitle>
                <DialogContent>
                    <TextField
                        label="Product Name"
                        fullWidth
                        value={newProductName}
                        onChange={(e) => setNewProductName(e.target.value)}
                        sx={{ marginBottom: '10px' }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCreateProductDialog} color="secondary" variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={handleCreateProduct} color="primary" variant="contained">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Dialog for Creating New User */}
            <Dialog open={createUserDialogOpen} onClose={handleCloseCreateUserDialog}>
                <DialogTitle sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                    Create New User
                </DialogTitle>
                <DialogContent>
                    <TextField
                        label="User Name"
                        fullWidth
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                        sx={{ marginBottom: '10px' }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCreateUserDialog} color="secondary" variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={handleCreateUser} color="primary" variant="contained">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};