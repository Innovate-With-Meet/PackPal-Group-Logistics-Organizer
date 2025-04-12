import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

// Styled Components
const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    width: '100%',
    maxWidth: '1000px',
    height: 'auto',
    backgroundColor: (theme.vars || theme).palette.background.paper,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
        transform: 'scale(1.02)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    backgroundColor: (theme.vars || theme).palette.background.default,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: (theme.vars || theme).palette.text.primary,
}));

// Author Component
function Author({ authors }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                justifyContent: 'center',
                alignItems: 'center',
                padding: '16px',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                borderRadius: '8px',
            }}
        >
            <AvatarGroup max={3}>
                {authors.map((author, index) => (
                    <Avatar key={index} alt={author.name} src={author.avatar} sx={{ width: 24, height: 24 }} />
                ))}
            </AvatarGroup>
            <Typography variant="caption">
                {authors.map((author) => author.name).join(', ')}
            </Typography>
        </Box>
    );
}

Author.propTypes = {
    authors: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

// Main Component
export const TeamIntro = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryClick = (category) => setSelectedCategory(category);
    const handleSearch = (event) => setSearchQuery(event.target.value.toLowerCase());

    const cardData = [
        {
            img: 'https://picsum.photos/1200/600?random=1',
            tag: 'Our Team',
            title: 'PackPal - The Inventory Manager Web System',
            description:
                'PackPal is your trusted partner for efficient inventory management. Our system is designed to streamline operations, reduce errors, and provide real-time insights into your inventory. Join us in revolutionizing the way you manage your inventory.',
            authors: [
                { name: 'John Doe', avatar: '/static/images/avatar/1.jpg' },
                { name: 'Jane Smith', avatar: '/static/images/avatar/2.jpg' },
                { name: 'Alice Johnson', avatar: '/static/images/avatar/3.jpg' },
                { name: 'Bob Brown', avatar: '/static/images/avatar/4.jpg' },
            ],
        },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                padding: { xs: 2, md: 4 },
                backgroundColor: '#e8f5e9', // Light green background
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                width: '100%',
            }}
        >
            {/* Header */}
            <Typography
                variant="h1"
                gutterBottom
                sx={{
                    fontSize: { xs: '2rem', md: '3.5rem' },
                    fontWeight: 'bold',
                    textAlign: 'center',
                    background: 'linear-gradient(90deg, #2e7d32, #1b5e20)', // Green gradient
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    padding: '20px',
                    borderRadius: '8px',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        color: '#1b5e20',
                        WebkitTextFillColor: 'unset',
                    },
                }}
            >
                PackPal - The Inventory Manager Web System
            </Typography>

            <Typography
                variant="h6"
                gutterBottom
                sx={{
                    textAlign: 'center',
                    color: '#2e7d32', // Green text
                    maxWidth: '800px',
                }}
            >
                Discover how PackPal can transform your inventory management process.
            </Typography>

            {/* Category Filters and Search Field */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '900px',
                    gap: 2,
                }}
            >
                {/* Chips */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'wrap',
                    }}
                >
                    {['Overview', 'Features', 'Benefits', 'Pricing', 'Support'].map((category) => (
                        <Chip
                            key={category}
                            label={category}
                            onClick={() => handleCategoryClick(category)}
                            color={selectedCategory === category ? 'success' : 'default'} // Green for selected
                            variant={selectedCategory === category ? 'filled' : 'outlined'}
                        />
                    ))}
                </Box>

                {/* Search Field */}
                <TextField
                    label="Search PackPal Services"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearch}
                    sx={{
                        width: '100%',
                        maxWidth: 300,
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#2e7d32', // Green border
                            },
                            '&:hover fieldset': {
                                borderColor: '#1b5e20', // Dark green on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#1b5e20', // Dark green when focused
                            },
                        },
                    }}
                />
            </Box>

            {/* Team Card */}
            <SyledCard
                sx={{
                    backgroundColor: '#ffffff', // White background for the card
                    '&:hover': {
                        backgroundColor: '#e8f5e9', // Light green on hover
                    },
                }}
            >
                <CardMedia
                    component="img"
                    alt="Team Image"
                    image={cardData[0].img}
                    sx={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
                />
                <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2e7d32' }}> {/* Green title */}
                        {cardData[0].title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#555' }}>
                        {cardData[0].description}
                    </Typography>
                </CardContent>
                <Author authors={cardData[0].authors} />
            </SyledCard>
        </Box>
    );
};