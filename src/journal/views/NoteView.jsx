import { SaveOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";

export const NoteView = () => {
  return (
    <Card sx={{ p: 4 }}>
      <CardActions sx={{px: 0, pt: 0}}>
        <Grid container direction="row" justifyContent="space-between" spacing={2}>
          <Grid item order={{ xs: 1, sm: 0 }}>
            <Typography variant="h3" fontWeight={800} color="primary">
              28 agosto, 2023
            </Typography>
          </Grid>
          <Grid item  order={{ xs: 0, sm: 1 }}>
            <Button variant="outlined">
              <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
              Guardar
            </Button>
          </Grid>
        </Grid>
      </CardActions>
      <CardContent sx={{px: 0}}>
        <Grid container spacing={{ sm: 4 }}>
          <Grid item sm={6} sx={{ mt: 2 }}>
            <TextField
              type="text"
              variant="standard"
              fullWidth
              placeholder="Ingrese un título"
              label="Título"
              sx={{ mb: 2 }}
            />
            <TextField
              type="text"
              variant="standard"
              fullWidth
              multiline
              placeholder="¿Qué sucedió el día de hoy?"
              label="Descripción"
              sx={{ mb: 1 }}
              minRows={5}
            />
          </Grid>
          <Grid item sm={6}>
            <ImageGallery />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
