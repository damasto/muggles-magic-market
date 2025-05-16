import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#A97C50', py: 2, mt: 'auto' }}>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
        <Link
          id='footer-git'
          style={{ textDecoration: "none" }}
          href="https://github.com/damasto/muggles-magic-market"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
           <GitHubIcon fontSize="small" htmlColor="#122415" />
        
        </Link>
      </Stack>
    </Box>
  );
};

export default Footer;