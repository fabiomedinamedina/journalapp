import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";


const formData = {
  displayName: '',
  email: '',
  password: '',
}

const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;

const formValidations = {
  displayName: [(value) => value.length >= 2 , 'El nombre es obligatorio'],
  email: [(value) => emailValidation.test(value) , 'Escribe un correo valido correo@example.com'],
  password: [(value) => passwordValidation.test(value) , 'La contraseña debe tener más de 6 caracteres y por lo menos una mayúscula y un número'],
}


export const RegisterPage = () => {

  const [formSubmited, setFormSubmited] = useState(false);
  

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    console.log(formState);
  }

  console.log(emailValid);


  return (
    <AuthLayout
      title="Proceso de registro"
      description="Ingresa tus datos para continuar"
      isLogin={false}
    >
      <Grid container>
        <Grid item>
          <form onSubmit={ onSubmit } >
            <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  variant="standard"
                  label="Nombre completo"
                  type="text"
                  placeholder="Tu nombre"
                  fullWidth
                  name="displayName"
                  value={ displayName }
                  onChange={ onInputChange }
                  error={ !!displayNameValid && formSubmited }
                  helperText={ formSubmited && displayNameValid }
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  variant="standard"
                  label="Correo electrónico"
                  type="email"
                  placeholder="fabio@fabiomedina.com"
                  fullWidth
                  name="email"
                  value={ email }
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
                  placeholder="***********"
                  fullWidth
                  name="password"
                  value={ password }
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
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ color: "white", boxShadow: 0 }}
                >
                  Registrase
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
