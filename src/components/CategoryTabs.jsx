import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';


const categories = [
  { label: 'Animals', path: '/category/animals' },
  { label: 'Food', path: '/category/food' },
  { label: 'Jewelry', path: '/category/jewelry' },
  { label: 'Potions', path: '/category/potions' },
  { label: 'Wands', path: '/category/wands' },
  { label: 'Selling', path: '/selling' },

];

export default function CategoryTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentTab = categories.find(cat => location.pathname.startsWith(cat.path))?.path || false;

  const handleChange = (event, newValue) => {
    navigate(newValue);
  };

  return (
    <Box sx={{
      width: '100%',
      margin: '0 auto',
      backgroundColor: "#EED5A5",
backgroundImage: 'url("/assets/backgroundbar.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
        }}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
         sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#A97C50', 
          },
        }}
      >
        {categories.map(cat => (
          <Tab key={cat.path} label={cat.label} value={cat.path} 
            sx={{ marginX: 2,
            color: '#0F2A2C',
                '&:hover': {
            color: '#0F2A2C',
            },
          '&.Mui-selected': {
      color: '#0F2A2C',
            fontWeight: 'bold' }}}
          />
        ))}
   </Tabs>
    </Box>
  );
}


