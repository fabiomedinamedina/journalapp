import { addNewEmptyNote, clearNotesLogout, deleteNoteById, journalSlice, messageAction, savingNewNote, setActiveNote, setDeleteImagesById, setNotes, setPhotosToActiveNote, updatedNote } from "../../../src/store/journal";
import { initialState, initialStateSaving, initialStateWithNotes, noteDemo, noteDemo2, noteDemoActive, noteDemoEmpty, savingNewNoteState } from "../../fixtures/journalFixtures";

describe('Pruebas en Journal Slice', () => {
  
  test('Debería retornar el estado inicial y el nombre journal', () => {
    
    const state = journalSlice.reducer( initialState, {} );

    expect( journalSlice.name ).toBe('journal');
    expect( state ).toBe( initialState );

  });

  test('savingNewNote Debería colocar isSaving en true', () => {
    
    const state = journalSlice.reducer( initialState, savingNewNote() );

    expect( state.isSaving ).toBe( true );

  });

  test('addNewEmptyNote debería agregar nota en notes y isSaving false', () => {

    const state = journalSlice.reducer( initialStateSaving, addNewEmptyNote( noteDemoEmpty ) );
    expect( state.notes.length ).toBe( 1 );
    expect( state.isSaving ).toBe( false );

  });

  test('setActiveNote debería colocar la nota seleccionada en activeNote y mensaje en null', () => {
    
    const initialStateTest = { ...initialStateSaving, messageAction: 'Error' };
    const state = journalSlice.reducer( initialStateTest, setActiveNote( noteDemoActive ) );

    expect( state.activeNote ).toBe( noteDemoActive );
    expect( state.messageAction ).toBe( null );

  });

  test('setNotes deberia colocar las dos notas en notes y isSaving false', () => {

    const initialStateTest = { ...initialState, isSaving: true };
    const notes = [ noteDemo, noteDemo2 ];
    const state = journalSlice.reducer( initialStateTest, setNotes( notes ) );

    expect( state.notes.length ).toBe( 2 );
    expect( state.notes ).toEqual( notes );

  });

  test('updatedNote debería actualizar la nota', () => {
    const activeNote = {
      id: '64432',
      title: 'Titulo nota 2 modificado',
      body: 'Descripción de la nota 2 modificado',
      date: 435435,
      imageUrls: [
        'https://imagenNota1.jpg'
      ]
    }
    const state = journalSlice.reducer( initialStateWithNotes, updatedNote(activeNote) );
    const noteActive = state.notes.filter( note => note.id === activeNote.id );

    expect( state.isSaving ).toBe( false );
    expect( noteActive ).toEqual( [ activeNote ] );
  });

  test('messageAction deberia colocar isSaving false, y mensaje', () => {
    
    const errorMessage = 'Mensaje de error';
    const state = journalSlice.reducer( initialStateSaving, messageAction( errorMessage ) );

    expect( state.isSaving ).toBe( false );
    expect( state.messageAction ).toBe( errorMessage );

  });

  test('setPhotosToActiveNote debería colocar las imagenes nuevas', () => {

    const images = [
      'https://imagenNota1.jpg',
      'https://imagenNota2.jpg',
    ]
    const state = journalSlice.reducer( initialStateSaving, setPhotosToActiveNote( images ) )
    
    expect( state.activeNote.imageUrls.length ).toBe( 2 );
    expect( state.isSaving ).toBe( false );

  });

  test('clearNotesLogout debe limpiar el state', () => {
    
    const state = journalSlice.reducer( initialStateWithNotes, clearNotesLogout() );
    expect( state ).toEqual( initialState );

  });

  test('deleteNoteById debe eliminar la nota de los notes', () => {
    
    const state = journalSlice.reducer( initialStateWithNotes, deleteNoteById( '64432' ) );
    expect( state.activeNote ).toBe( null );
    expect( state.notes.length ).toBe( 1 );
    expect( state.isSaving ).toBe( false );

  });

  test('setDeleteImagesById debe agregar imagen al deleteImages de la nota activa y eliminar del notes la imagen', () => {

    const state = journalSlice.reducer( initialStateWithNotes, setDeleteImagesById( '12' ) );
    
    expect( state.activeNote.deleteImages.length ).toBe( 1 )
    expect( state.activeNote.imageUrls.length ).toBe( 1 );
    expect( state.activeNote.deleteImages ).toContain( '12' );

  });
  

})