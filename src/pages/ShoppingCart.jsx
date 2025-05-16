import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Button, Link,  } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
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
      <ListItemAvatar>
        <Avatar
        variant='square'
        src={`/images/${item.image}`}
        sx={{width:50, height:50, mr:2}}
        ></Avatar>
      </ListItemAvatar>
      <ListItemText

        primary={item.product ? item.product.title : item.title}
        secondary={`€${item.price} - pcs: ${item.quantity}`}
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
        {shoppingCart.length === 0 ? null : (
  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
    <Link component={RouterLink} to="/" underline="none">
      <Button variant="contained" color="primary">
        Continue Shopping
      </Button>
      <Button variant="contained" color="primary">
        Continue to checkout
      </Button>
    </Link>
  </Box>
)}
    </Container>
  );
}