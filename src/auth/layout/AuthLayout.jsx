import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Grid, Stack, Typography, Link } from '@mui/material';
import { AuthFooter } from '../../ui/components/AuthFooter';

//IMAGES
import backgroundAuth from '../../assets/images/auth/background-auth.jpg';
import logoJournal from '../../assets/images/logo-journal-app.svg';

export const AuthLayout = ({ children, title, description, isLogin }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundAuth})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: 4,
      }}
    >
      <Grid item sx={{ boxShadow: 10, backgroundColor: "white" }}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ maxWidth: 550 }}
        >
          <Grid item sx={{ px: { xs: 4, sm: 9 }, py: { xs: 4, sm: 7 } }}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item sx={{ mb: { xs: 2, sm: 4 } }}>
                <img
                  src={logoJournal}
                  alt="Logo Journal App - Fabio Medina"
                  loading="lazy"
                />
              </Grid>
              <Grid
                item
                sx={{ mb: 2 }}
                alignItems="center"
                justifyContent="center"
              >
                <Stack alignItems="center" justifyContent="center">
                  <Typography
                    variant="h1"
                    marginBottom
                    color="primary.main"
                    align="center"
                    sx={{ mb: 0, fontSize: 25, fontWeight: 800 }}
                  >
                    {title}
                  </Typography>
                  <Typography align="center">{description}</Typography>
                </Stack>
              </Grid>
            </Grid>
            {children}
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          sx={{ backgroundColor: "secondary.light" }}
          padding={2}
        >
          <Link
            component={RouterLink}
            variant="contained"
            color="inherit"
            to={`/auth/${isLogin ? "register" : "login"}`}
          >
            {isLogin ? "Crear una cuenta" : "Iniciar sesión"}
          </Link>
        </Grid>
      </Grid>
      <AuthFooter />
    </Grid>
  );
};

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isLogin: PropTypes.bool,
};

AuthLayout.defaultProps = {
  title: "",
  description: "",
  isLogin: true,
};
