import PropTypes from "prop-types";

import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Box, Grid, IconButton, Toolbar, Typography, } from '@mui/material';

//IMAGES
import logoJournalWhite from '../../assets/images/logo-journal-app-blanco-horizontal.svg';

export const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: {md: `calc(100% - ${ drawerWidth }px)`},
        ml: { md: `${drawerWidth}px` }
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{mr: 2, display: { md: 'none' }}}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography component="div">
            <img
              src={logoJournalWhite}
              alt="Logo Journal App Blanco - Fabio Medina"
              style={{verticalAlign: 'middle'}}
            />
          </Typography>

          <IconButton color="inherit">
            <LogoutOutlined />
          </IconButton>
          

        </Grid>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired
}

NavBar.defaultProps = {
  drawerWidth: 300,
};