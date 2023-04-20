import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AuthFooter } from "../../ui/components/AuthFooter";

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(/assets/background-auth.jpg)`,
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
          <Grid item sx={{ px: {xs: 4, sm: 9}, py: {xs: 4, sm: 7} }}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item sx={{ mb: {xs: 2, sm: 4} }}>
                <img
                  src="/assets/logo-journal-app.svg"
                  alt="Logo Journal App - Fabio Medina"
                  loading="lazy"
                />
              </Grid>
              <Grid item sx={{ mb: 2 }} alignItems="center" justifyContent="center">
                <Stack alignItems="center" justifyContent="center" >
                  <Typography
                    variant="h1"
                    marginBottom
                    color="primary.main"
                    align="center"
                    sx={{ mb: 0, fontSize: 25, fontWeight: 800  }}
                  >
                    ¡Hola, Bienvenid@!
                  </Typography>
                  <Typography align="center">
                    Ingresa tus credenciales para continuar
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
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
                        <Divider
                          sx={{ flexGrow: 1 }}
                          orientation="horizontal"
                        />

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

                        <Divider
                          sx={{ flexGrow: 1 }}
                          orientation="horizontal"
                        />
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
            to="/auth/register"
          >
            Crear una cuenta
          </Link>
        </Grid>
      </Grid>
      <AuthFooter />
    </Grid>
  );
};
