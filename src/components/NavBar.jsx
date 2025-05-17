import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryTabs from "./CategoryTabs"
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { useCart } from "../Context/CartContext";

export default function NavBar() {
  const { shoppingCart } = useCart();
  const cartCount = shoppingCart.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();
  

  return (
    <Box sx={{
      width: '100%',
    }}>
      <AppBar position="static" sx={{
        backgroundColor: '#001f20',
        width: '100%',
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="go to homepage"
            sx={{ mr: 2, color: '#f3ebd9' }}
            onClick={() => navigate('/')}
          >
            <HomeIcon />
          </IconButton>
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            variant="h6"
            sx={{
              display: { xs: 'none', sm: 'block' },
              color: '#f3ebd9',
              fontWeight: 'bold',
            }}
          >
            Muggles' Magic Market
          </Link>
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%',
              maxWidth: 600,
            }}
          >
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <IconButton color="inherit" component={RouterLink} to="/shopping-cart">
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <CategoryTabs />
    </Box>
  );
}
