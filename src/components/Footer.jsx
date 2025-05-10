import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.100', py: 2, mt: 'auto', marginTop: 4 }}>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
        <Link
          id='footer-git'
          style={{ textDecoration: "none" }}
          href="https://github.com/damasto/muggles-magic-market"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
           <GitHubIcon fontSize="small" />
          <Typography variant="body2" color="textSecondary">
            Developed by Daniel and Angèle
          </Typography>
         
        </Link>
      </Stack>
    </Box>
  );
};

export default Footer;