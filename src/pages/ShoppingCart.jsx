import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { useCart } from "../Context/CartContext"

export default function ShoppingCart() {
  const { shoppingCart, removeItem, loading } = useCart();

  if (loading) {
    return (
      <Container maxWidth="md">
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Loading your cart...</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Your shopping cart
        </Typography>
        {shoppingCart.length === 0 ? (
          <Typography>Your cart is empty.</Typography>
        ) : (
          <>
            <List>
             {shoppingCart.map((item) => (
  <div key={item.id}>
    <ListItem>
      <ListItemText
        primary={item.product ? item.product.title : item.title}
        secondary={`€${item.price} - Quantity: ${item.quantity}`}
      />
      <Button onClick={() => removeItem(item.id)}>Remove</Button>
    </ListItem>
    <Divider />
  </div>
))}
            </List>
          </>
        )}
      </Box>
    </Container>
  );
}