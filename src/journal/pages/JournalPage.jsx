import { useDispatch, useSelector } from 'react-redux';
import { Fab } from '@mui/material';
import { BookmarkAddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/journal';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

export const JournalPage = () => {

  const { isSaving, activeNote, messageAction } = useSelector( state => state.journal );
  const dispatch = useDispatch();
  
  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  useEffect(() => {
    if(!!messageAction){
      const { title, message, type } = messageAction
      Swal.fire( title, message, type );
    }
  }, [messageAction]);

  return (
    <JournalLayout>
      {
        (!!activeNote)
        ? <NoteView />
        : <NothingSelectedView />
      }
      <Fab
        disabled={ isSaving }
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
        onClick={ onClickNewNote }
        sx={{
          position: 'fixed',
          bottom: 40,
          right: 40,
          borderRadius: 0
        }}
      >
        <BookmarkAddOutlined sx={{ mr: 1 }} />
        Nueva nota
      </Fab>
    </JournalLayout>
  );
};
