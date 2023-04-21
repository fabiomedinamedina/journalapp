import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout
      title="¡Hola, Bienvenid@!"
      description="Ingresa tus credenciales para continuar"
    >
      <Grid container>
        <Grid item>
          <form>
            <Grid container>
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
                >
                  <Box sx={{ mr: 1 }} display="flex" alignItems="center">
                    <img
                      src="/assets/social-google.svg"
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
