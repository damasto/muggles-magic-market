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

   const totalPrice = shoppingCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
            <List disablePadding>
             {shoppingCart.map((item) => (
   <React.Fragment key={item.id}>
    <ListItem
       secondaryAction={
         <Button
                      variant="outlined"
                      color="error"
                      size="small"
                        onClick={() => removeItem(item.id)}
                    >
                       Remove
                    </Button>
                  }
                  sx={{ px: 0 }}
                >
      <ListItemText
        primary={item.product ? item.product.title : item.title}
        secondary={`€${item.price} - quantity: ${item.quantity}`}
      />
    </ListItem>
    <Divider component="li" />
      </React.Fragment>
            ))}
          </List>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Typography variant="h6" fontWeight="bold">
            Total: €{totalPrice.toFixed(2)}
        </Typography>
        </Box>
        </>
     )}
        </Box>
    </Container>
  );
}