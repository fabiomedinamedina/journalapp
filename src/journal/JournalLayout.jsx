import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../ui/components';

const drawerWidth = 300;

export const JournalLayout = ({children}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    
    <Box
      className='animate__animated animate__fadeIn'
      sx={{display: 'flex'}}
    >
      <NavBar drawerWidth={drawerWidth} setOpen={handleDrawerToggle} />
      <SideBar drawerWidth={drawerWidth} openSidebar={mobileOpen} setOpen={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3
        }}
      >
        <Toolbar />
        { children }       

      </Box>
    </Box>
    
  );
};
