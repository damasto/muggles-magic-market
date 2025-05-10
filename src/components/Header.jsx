import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import headerImage from '../assets/header.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
        maxWidth: 1280,
        margin: '0 auto',
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        textAlign: 'left',
        color: 'white',
        flexDirection: 'column',
        padding: 2,
        paddingLeft: 10,
        paddingBottom: 3,
      }}
    >
      <Typography variant="h3" sx={{ 
          fontWeight: 'bold',
          color: '#f3ebd9',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9), 0px 0px 6px rgba(0, 0, 0, 0.7)', 
          marginBottom: 2
        }}
      >
        Discover magic in every corner
      </Typography>
       <Link to="/all-products" style={{ textDecoration: 'none' }}>
      <Button variant="contained"
      sx={{
        color: '#f3ebd9',
        border: '2px solid #f3ebd9',
        backgroundColor: '#0d1b2a',
        }}>
        Shop Now
      </Button>
      </Link>
    </Box>
  );
};

export default Header;