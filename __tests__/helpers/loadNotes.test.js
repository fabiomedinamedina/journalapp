import { collection, getDocs } from 'firebase/firestore/lite';
import { loadNotes } from '../../src/helpers/loadNotes';
import { noteDemo, noteDemo2, notesGetFirebase } from '../fixtures/journalFixtures';

jest.mock("firebase/firestore/lite", () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  getDocs: jest.fn(),
})); 

describe('Pruebas en load Notes', () => {
  
  test('Debería retornar las notas del usuario', async() => {

    const notesMock = notesGetFirebase;
    await getDocs.mockResolvedValue( notesMock );
    
    const uid = 'TEST-UID';
    const notes = await loadNotes( uid );

    expect( notes.length ).toBe( 2 );

  });

  test('Debería retornar el error si no se manda el UID', async() => {

    await expect( loadNotes() ).rejects.toThrowError( 'El UID no existe' );


  });

})