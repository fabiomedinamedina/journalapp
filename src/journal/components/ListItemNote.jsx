import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';

export const ListItemNote = ({ id, title = '', body, date, imageUrls = [], deleteImages = [] }) => {

  const dispatch = useDispatch();

  const onClickNote = () => {
    const note = {
      id, title, body, date, imageUrls, deleteImages
    }
    dispatch( setActiveNote( note ) );
  };
  
  const newTitle = useMemo( () => {
    return title.length > 17
      ? title.substring(0, 17) + '...'
      : title;
  },[title]);

  return (
    <ListItem disableGutters dense={true}>
      <ListItemButton
        onClick={ onClickNote }
        alignItems="flex-start"
        sx={{
          ":hover": {
            color: "primary",
            bgcolor: "primary.light",
          },
        }}
      >
        <ListItemIcon sx={{ mt: 0 }}>
          <TurnedInNot color="secondary" />
        </ListItemIcon>
        <Grid container>
          <ListItemText
            primary={ newTitle }
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
          <ListItemText secondary={ body } />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

ListItemNote.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}
