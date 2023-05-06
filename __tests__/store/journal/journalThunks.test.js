import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../../src/firebase';

import { addNewEmptyNote, deleteNoteById, messageAction, savingNewNote, setActiveNote, setNotes, setSaving, updatedNote } from '../../../src/store/journal/journalSlice';
import { startDeletingNote, startLoadingNotes, startNewNote, startSaveNote } from '../../../src/store/journal/journalThunks';
import { loadNotes } from '../../../src/helpers';
import { noteDemo, noteDemo2, noteDemoActive } from '../../fixtures/journalFixtures';


jest.mock('../../../src/helpers/loadNotes', () => ({
  loadNotes: jest.fn(),
}))

describe("Pruebas en Journal Thunks", () => {

  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("startNewNote debería crear una nueva nota en blanco", async () => {

    const uid = "TEST-UID-12345";
    getState.mockReturnValue({ auth: { uid: uid } });

    await startNewNote()(dispatch, getState);

    expect( dispatch ).toHaveBeenCalledTimes( 3 );
    expect( dispatch ).toHaveBeenCalledWith( savingNewNote() );
    expect( dispatch ).toHaveBeenCalledWith( addNewEmptyNote({
      body: '',
      title: '',
      date: expect.any( Number ),
      id: expect.any( String ),
      imageUrls: [],
    }));
    expect( dispatch ).toHaveBeenCalledWith( setActiveNote({
      body: '',
      title: '',
      date: expect.any( Number ),
      id: expect.any( String ),
      imageUrls: [],
      deleteImages: [],
    }));

    // BORRADO DE FIREBASE
    const collectionRef = collection( FirebaseDB, `${uid}/journal/notes` );
    const docs = await getDocs( collectionRef );

    const deletePromises= [];
    docs.forEach( doc => deletePromises.push( deleteDoc( doc.ref ) ) );
    await Promise.all( deletePromises );

  });

  test('startLoadingNotes debe llamar setNote con notas', async() => {

    const uid = 'UID-DEMO';
    const notes = [ noteDemo, noteDemo2 ];
    await loadNotes.mockResolvedValue(notes);

    await startLoadingNotes(uid)( dispatch );

    expect( dispatch ).toHaveBeenCalledTimes(1)
    expect( dispatch ).toHaveBeenCalledWith( setNotes( notes ) );

  });

  test('startSaveNote guardar la nota sin mock', async() => {
     
    const uid = "TEST-GET-NOTES";

    getState.mockReturnValue({
      auth: { uid: uid },
      journal: { activeNote: noteDemoActive }
    });

    await startSaveNote()(dispatch, getState);

    expect( dispatch ).toHaveBeenCalledTimes(3);
    expect( dispatch ).toHaveBeenCalledWith( setSaving() );
    expect( dispatch ).toHaveBeenCalledWith( updatedNote( noteDemoActive ) );
    expect( dispatch ).toHaveBeenCalledWith( messageAction({
      title: 'Actualización de nota',
      type: 'success',
      message: `${ noteDemoActive.title }, actualizada correctamente`
    }) );
    

  });

  test('startDeletingNote debe eliminar la nota primero la crearemos', async() => {
    
    const uid = "TEST-GET-NOTES";
    const newNote = noteDemo
    delete newNote.id;

    const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );
    await setDoc( newDoc, newNote );

    getState.mockReturnValue({
      auth: { uid: uid },
      journal: { activeNote: {...noteDemo, id: newDoc.id} }
    });

    await startDeletingNote()(dispatch, getState);

    expect( dispatch ).toHaveBeenCalledTimes(2);
    expect( dispatch ).toHaveBeenCalledWith( setSaving() );
    expect( dispatch ).toHaveBeenCalledWith( deleteNoteById( newDoc.id ) );

    
  });

  // test('startSaveNote guardar la nota mockeada', async() => {

  //   jest.mock("firebase/firestore/lite", () => ({
  //     doc: jest.fn(),
  //     getFirestore: jest.fn(),
  //     collection: jest.fn(),
  //     setDoc: jest.fn()
  //   }));
        
  //   const uid = "TEST-UID";
  //   getState.mockReturnValue({
  //     auth: { uid: uid },
  //     journal: { activeNote: noteDemoActive }
  //   });

  //   await startSaveNote()(dispatch, getState);

  //   expect( dispatch ).toHaveBeenCalledTimes(3);
  //   expect( dispatch ).toHaveBeenCalledWith( setSaving() );
  //   expect( dispatch ).toHaveBeenCalledWith( updatedNote( noteDemoActive ) );
  //   expect( dispatch ).toHaveBeenCalledWith( messageAction({
  //     title: 'Actualización de nota',
  //     type: 'success',
  //     message: `${ noteDemoActive.title }, actualizada correctamente`
  //   }) );
    

  // });

});
