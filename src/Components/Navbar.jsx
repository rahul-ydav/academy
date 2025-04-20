import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

function NavbarWithButtons() {
  const navigate = useNavigate();
  const handleNavClick = (page) => {
    console.log(`Navigating to ${page}...`);
    navigate(`/${page}`);
    

  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Title */}
          <Typography variant="h6" component="div" sx={{ /* Removed flexGrow here */ }}>
            Dashboard
          </Typography>

          {/* This Box acts as a spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Navigation Buttons */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}> {/* Hide on extra-small screens */}
            <Button color="inherit" onClick={() => handleNavClick('Profile')}>
              Profile
            </Button>
            <Button color="inherit" onClick={() => handleNavClick('Lessons')}>
              Topics
            </Button>
            <Button color="inherit" onClick={() => handleNavClick('Progress')}>
              Progress
            </Button>
            <Button color="inherit" onClick={() => handleNavClick('Logout')}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavbarWithButtons;
