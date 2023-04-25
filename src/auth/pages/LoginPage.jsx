import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

//Images
import iconGoogle from '../../assets/images/auth/social-google.svg';


const formData = {
  email: '',
  password: '',
}

const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
const formValidations = {
  email: [(value) => emailValidation.test(value) , 'Escribe un correo valido correo@example.com'],
  password: [(value) => value.length >= 6 , 'La contraseña debe tener más de 6 caracteres'],
}



export const LoginPage = () => {

  const [formSubmited, setFormSubmited] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const {email, password, onInputChange, isFormValid, emailValid, passwordValid} = useForm(formData, formValidations);

  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = ( event ) => {

    event.preventDefault();
    setFormSubmited( true );

    if( !isFormValid ) return;

    dispatch( startLoginWithEmailPassword({ email, password }) );
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
                  error={ !!emailValid && formSubmited }
                  helperText={ formSubmited && emailValid  }
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
                  error={ !!passwordValid && formSubmited }
                  helperText={ formSubmited && passwordValid }
                />
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="center"
              spacing={2}
              sx={{ mt: 1, mb: 2 }}
            >
              <Grid
                item
                xs={12}
                display={ !!errorMessage ? '' : 'none' }
               >
                <Alert severity="error">
                  {errorMessage}
                </Alert>
              </Grid>
              <Grid item xs={12}>
                <Button
                  disabled={ isAuthenticating }
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
                  disabled={ isAuthenticating }
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
