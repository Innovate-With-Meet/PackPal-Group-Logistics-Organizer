import React, { useState, useEffect } from "react";
import {
    Container,
    Typography,
    Card,
    CardContent,
    Grid,
    Button,
    TextField,
    Box,
    Divider,
    CircularProgress,
    Alert
} from "@mui/material";
import { Navbar } from "../Layout/Navbar";

export const EmpLanding = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [tasks, setTasks] = useState([]);
    const [progressUpdate, setProgressUpdate] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        // Simulate fetching tasks from Admin
        const fetchTasks = async () => {
            setLoading(true);
            try {
                await new Promise((res) => setTimeout(res, 1000));
                const mockTasks = [
                    { id: 1, title: "Update Product in Electronics", status: "Pending", deadline: "2025-04-15", completed: false },
                    { id: 2, title: "Update Product in Health Category", status: "In Progress", deadline: "2025-04-17", completed: false }
                ];
                setTasks(mockTasks);
            } catch (err) {
                setError("Failed to fetch tasks from admin.");
            } finally {
                setLoading(false);
            }
        };
        fetchTasks();
    }, []);

    const handleSubmit = () => {
        if (!progressUpdate.trim()) return;
        setSuccessMessage("Your update has been sent to the Admin.");
        setProgressUpdate("");
        setTimeout(() => setSuccessMessage(""), 3000);
    };

    const handleCompleteTask = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id
                ? { ...task, status: "Completed", completed: true }
                : task
        );
        setTasks(updatedTasks);
        setSuccessMessage("Task marked as completed and update sent to Admin.");
        setTimeout(() => setSuccessMessage(""), 3000);
    };

    return (
        <>
            <Navbar />
            <Container maxWidth="md" sx={{ mt: 10, mb: 5 }}>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                    Employee Dashboard
                </Typography>

                {loading ? (
                    <Box display="flex" justifyContent="center" mt={4}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Alert severity="error">{error}</Alert>
                ) : (
                    <>
                        <Card elevation={4} sx={{ mb: 4 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom color="primary">
                                    Tasks from Admin
                                </Typography>
                                <Divider sx={{ mb: 2 }} />
                                {tasks.map((task) => (
                                    <Box key={task.id} mb={3}>
                                        <Typography variant="subtitle1" fontWeight={600}>
                                            {task.title}
                                        </Typography>
                                        <Typography color="text.secondary">Status: {task.status}</Typography>
                                        <Typography color="text.secondary">Deadline: {task.deadline}</Typography>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            sx={{ mt: 1 }}
                                            disabled={task.completed}
                                            onClick={() => handleCompleteTask(task.id)}
                                        >
                                            {task.completed ? "Completed" : "Complete Task"}
                                        </Button>
                                    </Box>
                                ))}
                            </CardContent>
                        </Card>

                        <Card elevation={4}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom color="primary">
                                    Submit Additional Progress / Note
                                </Typography>
                                <Divider sx={{ mb: 2 }} />
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="Write your progress update"
                                    variant="outlined"
                                    value={progressUpdate}
                                    onChange={(e) => setProgressUpdate(e.target.value)}
                                />
                                <Button
                                    sx={{ mt: 2 }}
                                    variant="contained"
                                    onClick={handleSubmit}
                                    disabled={!progressUpdate.trim()}
                                >
                                    Send to Admin
                                </Button>

                                {successMessage && (
                                    <Alert severity="success" sx={{ mt: 2 }}>
                                        {successMessage}
                                    </Alert>
                                )}
                            </CardContent>
                        </Card>
                    </>
                )}
            </Container>
        </>
    );
};
