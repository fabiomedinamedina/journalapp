import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { JournalFooter } from "./JournalFooter";

//IMAGES
import logoJournal from '../../assets/images/logo-journal-app.svg';

export const ContentDrawer = () => {
  return (
    <Grid
      container
      direction="column"
      wrap="nowrap"
      sx={{ px: 3, py: { xs: 3, sx: 5 }, height: "100%", overflowX: "auto" }}
      justifyContent="space-between"
    >
      <Grid item>
        <Box
          className='animate__animated animate__fadeInLeft'
          sx={{ pb: 3 }}
        >
          <Toolbar>
            <Typography component="div" noWrap variant="h6">
              <img
                src={logoJournal}
                alt="Logo Journal App - Fabio Medina"
                width={"100%"}
              />
            </Typography>
          </Toolbar>
        </Box>
        <Divider className='animate__animated animate__fadeInLeft' />
        <Box
          className='animate__animated animate__fadeInLeft'
          sx={{ pt: 3 }}
        >
          <Typography color="primary.main" fontWeight={700} variant="h5">
            Lista de notas
          </Typography>
          <List>
            {["Enero", "Febrero", "Marzo", "Abril"].map((text) => (
              <ListItem key={text} disableGutters dense={true}>
                <ListItemButton
                  alignItems="flex-start"
                  sx={{
                    ":hover": {
                      color: "primary",
                      bgcolor: "primary.light",
                    },
                  }}
                >
                  <ListItemIcon>
                    <TurnedInNot color="secondary" />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        fontWeight: 700,
                        color: "primary",
                        fontSize: 16,
                        lineHeight: 1,
                      }}
                      sx={{
                        mb: 0,
                      }}
                    />
                    <ListItemText
                      secondary={"Ingresa tus datos para continuar"}
                    />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>
      <Grid item>
        <Divider className='animate__animated animate__fadeInLeft'/>
        <JournalFooter />
      </Grid>
    </Grid>
  );
};
