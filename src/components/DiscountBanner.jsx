import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; 

const DiscountBanner = () => {
  return (
    <Box
      sx={{
        height: '300px',
       backgroundImage: 'url("/images/discountbanner.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        color: '#4b3c21', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          marginBottom: 2,
          border: "1p solid black"
        }}
      >
        ✨ LIMITED TIME OFFER: 20% OFF ON ALL WANDS! ✨
      </Typography>
      <Button variant="contained" component={RouterLink} to="/category/wands" 
      sx={{
        color: '#f3ebd9',
        border: '2px solid #f3ebd9',
        backgroundColor: '#0d1b2a',
        border: "1px solid black"
        }}>
        Shop wands
      </Button>
    </Box>
  );
};

export default DiscountBanner;