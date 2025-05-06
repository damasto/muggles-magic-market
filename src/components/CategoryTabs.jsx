import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const categories = [
  { label: 'Category 1', path: '/category1' },
  { label: 'Category 2', path: '/category2' },
  { label: 'Category 3', path: '/category3' },
  { label: 'Category 4', path: '/category4' },
];

export default function CategoryTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentTab = categories.find(cat => location.pathname.startsWith(cat.path))?.path || false;

  const handleChange = (event, newValue) => {
    navigate(newValue);
  };

  return (
    <Box sx={{ backgroundColor: 'background.paper' }}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        centered
      >
        {categories.map(cat => (
          <Tab key={cat.path} label={cat.label} value={cat.path} />
        ))}
      </Tabs>
    </Box>
  );
}


