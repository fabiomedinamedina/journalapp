import { List } from "@mui/material";
import { useSelector } from "react-redux";
import { ListItemNote } from "./ListItemNote";

export const ListNotes = () => {

  const { notes } = useSelector( state => state.journal );
  
  return (
    <List>
      {
        notes.map(( note ) => (
          <ListItemNote key={ note.id } { ...note } />
        ))
      }
    </List>
  );
};
