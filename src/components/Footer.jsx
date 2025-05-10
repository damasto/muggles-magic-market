import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.100', py: 2, mt: 'auto', marginTop: 4 }}>
      <Link
        style={{textDecoration: "none"}}
        href="https://github.com/damasto/muggles-magic-market"
        target="_blank"
        rel="noopener"
        color="inherit"
      >
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
          <Typography variant="body2" color="textSecondary">
            Developed by Daniel and Angèle
          </Typography>
          <GitHubIcon fontSize="small" />
        </Stack>
      </Link>
    </Box>
  );
};

export default Footer;