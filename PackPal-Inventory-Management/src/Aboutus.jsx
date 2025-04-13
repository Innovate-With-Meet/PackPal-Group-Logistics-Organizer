import React from 'react';
import {
    Box,
    Typography,
    Avatar,
    Grid,
    Card,
    CardContent,
    IconButton,
    Chip,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Navbar } from './Layout/Navbar'; // Import the Navbar component (adjust the path if necessary)

const teamMembers = [
    {
        name: 'Meet Rana',
        role: 'Team Leader',
        avatar: 'https://via.placeholder.com/150?text=Meet',
        github: 'https://github.com/meet-rana',
        linkedin: 'https://www.linkedin.com/in/rana-meet',
        skills: ['Planning', 'Full Stack (React + MUI)', 'FastAPI'],
    },
    {
        name: 'Doshi Shreyam',
        role: 'Member',
        avatar: 'https://via.placeholder.com/150?text=Shreyam',
        github: 'https://github.com/Shreyam0308',
        linkedin: 'https://linkedin.com/',
        skills: ['React + Bootstrap', 'FastAPI'],
    },
    {
        name: 'Taksh Patel',
        role: 'Member',
        avatar: 'https://via.placeholder.com/150?text=Taksh',
        github: 'https://github.com/tkp0987',
        linkedin: 'https://linkedin.com/',
        skills: ['CSS', 'HTML', 'JavaScript'],
    },
];

export const Aboutus = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Separate leader and members
    const leader = teamMembers.filter((member) => member.role === 'Team Leader');
    const members = teamMembers.filter((member) => member.role === 'Member');

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    background: 'linear-gradient(120deg, #e0f2f1, #ffffff)',
                    minHeight: '100vh',
                    padding: { xs: 3, md: 6 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 6,
                }}
            >
                {/* Header */}
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant={isMobile ? 'h4' : 'h2'}
                        sx={{
                            fontWeight: 700,
                            color: '#1b5e20',
                            textAlign: 'center',
                            letterSpacing: 1.5,
                        }}
                    >
                        Meet the Shenfield System Team
                    </Typography>
                </motion.div>

                {/* Subtext */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: 'center',
                            color: '#555',
                            maxWidth: '850px',
                            px: 2,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            lineHeight: 1.7,
                        }}
                    >
                        Final-year CSE students driven by innovation, creativity, and teamwork. We built PackPal at DAIICT Hackathon using <b>FASTAPI</b> and <b>React + MUI</b>.
                    </Typography>
                </motion.div>

                {/* Team Leader */}
                <Grid container spacing={5} justifyContent="center">
                    {leader.map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                            >
                                <Card
                                    sx={{
                                        borderRadius: '20px',
                                        p: 2,
                                        background: '#ffffff',
                                        boxShadow: '8px 8px 16px #d0d0d0, -8px -8px 16px #ffffff',
                                        transition: 'all 0.4s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '10px 10px 20px #cfcfcf, -10px -10px 20px #ffffff',
                                        },
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: 2,
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Avatar
                                            alt={member.name}
                                            src={member.avatar}
                                            sx={{
                                                width: 90,
                                                height: 90,
                                                mb: 1,
                                                border: '3px solid #2e7d32',
                                            }}
                                        />
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 600,
                                                color: '#1b5e20',
                                            }}
                                        >
                                            {member.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#777' }}>
                                            {member.role}
                                        </Typography>

                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.2, mt: 1 }}>
                                            {member.skills.map((skill, i) => (
                                                <Chip
                                                    key={i}
                                                    label={skill}
                                                    sx={{
                                                        backgroundColor: '#e0f2f1',
                                                        color: '#004d40',
                                                        fontWeight: 'bold',
                                                        px: 1,
                                                    }}
                                                />
                                            ))}
                                        </Box>

                                        {/* Social Icons */}
                                        <Box sx={{ mt: 1 }}>
                                            <IconButton
                                                href={member.github}
                                                target="_blank"
                                                sx={{ color: '#333' }}
                                                aria-label="GitHub"
                                            >
                                                <GitHub />
                                            </IconButton>
                                            <IconButton
                                                href={member.linkedin}
                                                target="_blank"
                                                sx={{ color: '#0a66c2' }}
                                                aria-label="LinkedIn"
                                            >
                                                <LinkedIn />
                                            </IconButton>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Team Members */}
                <Grid container spacing={5} justifyContent="center">
                    {members.map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                            >
                                <Card
                                    sx={{
                                        borderRadius: '20px',
                                        p: 2,
                                        background: '#ffffff',
                                        boxShadow: '8px 8px 16px #d0d0d0, -8px -8px 16px #ffffff',
                                        transition: 'all 0.4s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '10px 10px 20px #cfcfcf, -10px -10px 20px #ffffff',
                                        },
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: 2,
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Avatar
                                            alt={member.name}
                                            src={member.avatar}
                                            sx={{
                                                width: 90,
                                                height: 90,
                                                mb: 1,
                                                border: '3px solid #2e7d32',
                                            }}
                                        />
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 600,
                                                color: '#2e7d32',
                                            }}
                                        >
                                            {member.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#777' }}>
                                            {member.role}
                                        </Typography>

                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.2, mt: 1 }}>
                                            {member.skills.map((skill, i) => (
                                                <Chip
                                                    key={i}
                                                    label={skill}
                                                    sx={{
                                                        backgroundColor: '#e0f2f1',
                                                        color: '#004d40',
                                                        fontWeight: 'bold',
                                                        px: 1,
                                                    }}
                                                />
                                            ))}
                                        </Box>

                                        {/* Social Icons */}
                                        <Box sx={{ mt: 1 }}>
                                            <IconButton
                                                href={member.github}
                                                target="_blank"
                                                sx={{ color: '#333' }}
                                                aria-label="GitHub"
                                            >
                                                <GitHub />
                                            </IconButton>
                                            <IconButton
                                                href={member.linkedin}
                                                target="_blank"
                                                sx={{ color: '#0a66c2' }}
                                                aria-label="LinkedIn"
                                            >
                                                <LinkedIn />
                                            </IconButton>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Footer */}
                <Box
                    sx={{
                        mt: 8,
                        py: 3,
                        width: '100%',
                        textAlign: 'center',
                        background: 'linear-gradient(90deg, #a5d6a7, #81c784)',
                        borderTopLeftRadius: '40px',
                        borderTopRightRadius: '40px',
                        boxShadow: '0px -5px 15px rgba(0,0,0,0.1)',
                    }}
                >
                    <Typography variant="body2" sx={{ color: '#1b5e20', fontWeight: 'bold' }}>
                        &copy; 2025 Shenfield System Team · Designed with 💚 and Passion
                    </Typography>
                </Box>
            </Box>
        </>
    );
};