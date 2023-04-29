import { Box, Divider, Grid, Toolbar, Typography } from "@mui/material";
import { JournalFooter } from "./JournalFooter";
import { ListNotes } from "../../journal/components";

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
          <ListNotes />
        </Box>
      </Grid>
      <Grid item>
        <Divider className='animate__animated animate__fadeInLeft'/>
        <JournalFooter />
      </Grid>
    </Grid>
  );
};
