import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.100', py: 2, mt: 'auto', marginTop: 4 }}>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
        <Typography variant="body2" color="textSecondary">
          Developed by Daniel and Angèle
        </Typography>
        <Link
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <GitHubIcon fontSize="small" />
        </Link>
      </Stack>
    </Box>
  );
};

export default Footer;