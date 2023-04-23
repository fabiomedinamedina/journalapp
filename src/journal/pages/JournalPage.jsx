import { Fab } from '@mui/material';
import { JournalLayout } from '../JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { BookmarkAddOutlined } from '@mui/icons-material';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
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
