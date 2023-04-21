import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout
      title="Proceso de registro"
      description="Ingresa tus datos para continuar"
      isLogin={false}
    >
      <Grid container>
        <Grid item>
          <form>
            <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  variant="standard"
                  label="Nombre completo"
                  type="text"
                  placeholder="Tu nombre"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  variant="standard"
                  label="Correo electrónico"
                  type="email"
                  placeholder="fabio@fabiomedina.com"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Contraseña"
                  variant="standard"
                  type="password"
                  placeholder="***********"
                  fullWidth
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
