import React from 'react';
import PropTypes from 'prop-types';
import { Box, Drawer } from "@mui/material";
import { ContentDrawer } from './ContentDrawer';

export const SideBar = React.memo(({drawerWidth, openSidebar, setOpen}) => {

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary" // Temporary
        open={openSidebar}
        onClose={setOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <ContentDrawer />
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <ContentDrawer />
      </Drawer>
    </Box>
  );
})

SideBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired
}

SideBar.defaultProps = {
  drawerWidth: 300,
};