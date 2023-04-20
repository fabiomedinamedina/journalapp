import { Link as RouterLink } from "react-router-dom";
import { Box, Grid, Link, Typography } from "@mui/material";

 export const AuthFooter = () => {
   return (
    <footer className="footer-container">
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        direction={{xs: 'column', md: "row"}}
        spacing={3}
      >
        <Grid item>
          <Typography className="copyright">
            ©{new Date().getFullYear()} Todos los derechos reservados.
            <Link
            className="link-author"
            component={RouterLink}
            variant="contained"
            color="inherit"
            to="https://fabiomedina.com"
            target="_blank"
            rel="noopener"
          >
            Fabio Medina Medina
          </Link> 
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: {xs: 'center', md: 'start'} }}>
            <Link
              component={RouterLink}
              variant="contained"
              color="inherit"
              to="https://www.linkedin.com/in/fabio-medina-medina/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </Link>
            <Link
              component={RouterLink}
              variant="contained"
              color="inherit"
              to="https://github.com/fabiomedinamedina"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </Link>
            <Link
              component={RouterLink}
              variant="contained"
              color="inherit"
              to="https://github.com/fabiomedinamedina/journalapp"
              target="_blank"
              rel="noopener"
            >
              Source Code
            </Link>
          </Box>
        </Grid>
        <Grid item className="logo-author">
          
          <Link
            component={RouterLink}
            to="https:fabiomedina.com"
            target="_blank"
            rel="noopener"
          >
            <img
              src="/assets/logo-fm-copyright.svg"
              alt="Logo Fabio Medina Medina"
            />
          </Link>
        </Grid>

      </Grid>
    </footer>
   );
 };
 