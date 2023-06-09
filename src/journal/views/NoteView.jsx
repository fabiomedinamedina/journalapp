import { useMemo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from "@mui/material";
import { DeleteOutline, FileUploadOutlined, SaveOutlined } from "@mui/icons-material";
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from "../components/ImageGallery";
import { useForm } from "../../hooks";
import { messageAction, setActiveNote, startDeletingImages, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal";

export const NoteView = () => {

  const dispatch = useDispatch();
  const { activeNote, isSaving } = useSelector( state => state.journal );

  const { body, title, date, onInputChange, formState } = useForm(activeNote);

  const dateString = useMemo( () => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const newDate = new Date( date );
    return newDate.toLocaleDateString("es-ES", options) +" - "+ newDate.toLocaleTimeString('en-EN');
  },[date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch( setActiveNote( formState ) );
  }, [formState]);

  const onSaveNote = () => {
    dispatch( startSaveNote() );
    dispatch( startDeletingImages( activeNote.deleteImages ) );
  };

  const onInputFileChange = async({ target }) => {
    if( target.files === 0) return;

    await dispatch( startUploadingFiles( target.files ) );
    dispatch( startSaveNote() );
  }

  const onDelete = () => {
    const imagesIds = activeNote.imageUrls.map( image => image.id );
    dispatch( startDeletingImages( imagesIds ) );
    dispatch( startDeletingNote() );
    dispatch( messageAction({
      title: 'Eliminación de nota',
      type: 'info',
      message: `Nota eliminada correctamente`
    }));
  }
  

  return (
    <Card sx={{ p: 4 }} aria-label="note-view">
      <CardActions sx={{px: 0, pt: 0}}>
        <Grid container direction="row" justifyContent="space-between" spacing={2}>
          <Grid item order={{ xs: 1, sm: 0 }}>
            <Typography variant="h3" fontWeight={800} color="primary">
              { dateString }
            </Typography>
          </Grid>
          <Grid item  order={{ xs: 0, sm: 1 }}>
            <input
              style={{ display: 'none' }}
              ref={ fileInputRef }
              type="file"
              multiple
              onChange={ onInputFileChange }
            />
            <Button
              disabled={ isSaving }
              variant="outlined"
              onClick={ onSaveNote }
              sx={{ mr: 1 }}
            >
              <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
              Guardar
            </Button>

            <Button
              color='secondary'
              variant="outlined"
              disabled={ isSaving }
              onClick={ () => fileInputRef.current.click() }
              sx={{ mr: 1 }}
            >
              <FileUploadOutlined sx={{ fontSize: 30}} />
            </Button>
            <Button
              disabled={ isSaving }
              color="error"
              variant="outlined"
              onClick={ onDelete }
              >
                <DeleteOutline sx={{ fontSize: 30}}  />
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
              name="title"
              value={ title }
              onChange={ onInputChange }
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
              name="body"
              value={ body }
              onChange={ onInputChange }
              minRows={5}
            />
            
          </Grid>
          <Grid item sm={6}>
            <ImageGallery images={ activeNote.imageUrls } />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
