import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase";
import { addNewEmptyNote, deleteNoteById, messageAction, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updatedNote } from "./";
import { fileDelete, fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
  return async( dispatch, getState ) => {

    dispatch( savingNewNote() );
    const { uid } = getState().auth;
     
    const newNote = {
      title: '',
      body: '',
      imageUrls: [],
      date: new Date().getTime(),
    }

    const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );
    await setDoc( newDoc, newNote );

    newNote.id = newDoc.id;
    dispatch( addNewEmptyNote( newNote ) );
    dispatch( setActiveNote( newNote ) )
    
  }
}

export const startLoadingNotes = () => {
  return async( dispatch, getState ) => {
    
    const { uid } = getState().auth;
    if(!uid) throw new Error( 'El UID no existe' );

    const notes = await loadNotes( uid );

    dispatch( setNotes( notes ) );

  }
}

export const startSaveNote = () => {
  return async( dispatch, getState ) => {
    try {
      dispatch( setSaving() );
      
      const { uid } = getState().auth;
      const { activeNote:note } = getState().journal;

      const noteToFireStore = {
        ...note
      }
      delete noteToFireStore.id;

      const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}` );
      await setDoc( docRef, noteToFireStore, { merge: true } );
      dispatch( updatedNote( note ) );
      dispatch( messageAction({
        title: 'Actualización de nota',
        type: 'success',
        message: `${ note.title }, actualizada correctamente`
      }));

    } catch (error) {
      dispatch( messageAction({
        title: 'Actualización de nota',
        type: 'error',
        message: `No se ha podido actualizar correctamente la nota`
      }));
    }

  }
}

export const startUploadingFiles = ( files = [] ) => {
  return async( dispatch ) => {
    dispatch( setSaving() );

    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push( fileUpload( file ) );
    }

    const photosUrls = await Promise.all( fileUploadPromises );
    dispatch( setPhotosToActiveNote( photosUrls ));

  }
}

export const startDeletingNote = () => {
  return async( dispatch, getState ) => {

    dispatch( setSaving() );    
    const { uid } = getState().auth;
    const { activeNote: note } = getState().journal;

    const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
    await deleteDoc( docRef );
    
    const fileDeletePromises = [];
    for (const image of note.imageUrls) {
      fileDeletePromises.push( fileDelete( image.id ) );
    }
    const photosDelete = await Promise.all( fileDeletePromises );
   

    dispatch( deleteNoteById( note.id ) );

    const errorImagesDelete = photosDelete.map( ok => ok === true );

    dispatch( messageAction({
      title: 'Eliminación de nota',
      type: 'info',
      message: `Nota eliminada correctamente, se eliminaron ${errorImagesDelete.length} de ${photosDelete.length} imágenes`
    }));
    

  }
}