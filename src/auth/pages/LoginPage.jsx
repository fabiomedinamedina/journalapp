import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';

//Images
import iconGoogle from '../../assets/images/auth/social-google.svg';


export const LoginPage = () => {

  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm({
    email: 'fabio@fabiomedina.com',
    password: '123456'
  });

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch( checkingAuthentication() )
    console.log({email, password});
  }

  const onGoogleSingIn = () => {
    dispatch( startGoogleSignIn() );
    console.log('Iniciar Sesión Google');
  }


  return (
    <AuthLayout
      title="¡Hola, Bienvenid@!"
      description="Ingresa tus credenciales para continuar"
    >
      <Grid container>
        <Grid item>
          <form onSubmit={ onSubmit } >
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  variant="standard"
                  label="Correo electrónico"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="fabio@fabiomedina.com"
                  fullWidth
                  onChange={ onInputChange }
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Contraseña"
                  variant="standard"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="***********"
                  fullWidth
                  onChange={ onInputChange }
                />
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="center"
              spacing={2}
              sx={{ mt: 1, mb: 2 }}
            >
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ color: "white", boxShadow: 0 }}
                >
                  Iniciar Sesión
                </Button>
              </Grid>
              <Grid item xs={12} sx={{ mt: 4 }}>
                <Box alignItems="center" display="flex">
                  <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

                  <Typography
                    sx={{
                      cursor: "unset",
                      mx: 1.5,
                      py: 0,
                      px: 0,
                      fontSize: 12,
                      color: "grey.400",
                    }}
                  >
                    O
                  </Typography>

                  <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={8}>
                <Button
                  disableElevation
                  fullWidth
                  variant="outlined"
                  sx={{
                    color: "grey.700",
                    borderColor: "grey.300",
                    fontWeight: 400,
                    fontSize: 12,
                  }}
                  onClick={ onGoogleSingIn }
                >
                  <Box sx={{ mr: 1 }} display="flex" alignItems="center">
                    <img
                      src={iconGoogle}
                      alt="google"
                      width={15}
                      height={15}
                      style={{ marginRight: 2 }}
                    />
                  </Box>
                  Iniciar sesión con Google
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
