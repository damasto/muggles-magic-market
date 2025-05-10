import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        }}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        {categories.map(cat => (
          <>
          <Link to = { cat.path }> 
          <Tab key={cat.path} label={cat.label} value={cat.path} 
            sx={{ marginX: 2 }}
          />
          </Link>
          </>
        ))}
      </Tabs>
    </Box>
  );
}


