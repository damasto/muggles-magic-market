import { Box, Typography, Button } from '@mui/material';
import discountbannerImage from '../assets/discountbanner.png';
import { Link as RouterLink } from 'react-router-dom'; 

const DiscountBanner = () => {
  return (
    <Box
      sx={{
        height: '300px',
        backgroundImage: `url(${discountbannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        color: '#FDF8F0', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        flexDirection: 'column',
      }}
    >
     <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 2, 
        }}
      ></Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          marginBottom: 2,
        }}
      >
        ✨ LIMITED TIME OFFER: 20% OFF ON ALL WANDS! ✨
      </Typography>
      <Button variant="contained" component={RouterLink} to="/category/wands" 
      sx={{
        color: '#f3ebd9',
        border: '2px solid #f3ebd9',
        backgroundColor: '#0d1b2a',
        }}>
        Shop wands
      </Button>
    </Box>
  );
};

export default DiscountBanner;