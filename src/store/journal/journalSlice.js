import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaving: false,
  messageAction: null,
  notes: [],
  activeNote: null,
  // active: {
  //   id: '1234',
  //   title: '',
  //   body: '',
  //   date: 345345345,
  //   imageUrls: [],
  // }
};

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    savingNewNote: ( state ) => {
      state.isSaving = true;
    },
    addNewEmptyNote: ( state, action ) => {
      state.notes.push( action.payload );
      state.isSaving = false;
    },
    setActiveNote: ( state, action ) => {
      state.activeNote = action.payload;
      state.messageAction = null;
    },
    setNotes: ( state, action ) => {
      state.notes = action.payload;
    },
    setSaving: ( state ) => {
      state.isSaving = true;
      state.messageAction = null;
    },
    updatedNote: ( state, action ) => {
      state.isSaving = false;
      state.notes = state.notes.map( (note) => {
        if( note.id === action.payload.id ){
          return action.payload;
        }
        return note;
      });
    },
    messageAction: (state, action) => {
      state.isSaving = false,
      state.messageAction = action.payload;
    },
    setPhotosToActiveNote: (state, action) => {
      state.activeNote.imageUrls = [
        ...state.activeNote.imageUrls,
        ...action.payload
      ];
      state.isSaving= false;
    },
    clearNotesLogout: ( state ) => {
      state.isSaving = false;
      state.messageAction = null;
      state.notes = [];
      state.activeNote = null;
    },
    deleteNoteById: ( state, action ) => {
      state.activeNote = null
      state.notes = state.notes.filter( note => note.id !== action.payload );
      state.isSaving = false;
    },
  }
});


// Action creators are generated for each case reducer function
export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updatedNote,
  messageAction,
  setPhotosToActiveNote,
  clearNotesLogout,
  deleteNoteById,
 } = journalSlice.actions;