import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

export default function ShoppingCart () {
    return (
   <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Your shoppingcart
        </Typography>
        <Typography variant="body1">
          Your shoppingcart is empty
        </Typography>
      </Box>
    </Container>
  );
};