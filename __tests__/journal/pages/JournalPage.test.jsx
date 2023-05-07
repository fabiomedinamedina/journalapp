import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import { JournalPage } from '../../../src/journal/pages/JournalPage';
import { journalSlice } from '../../../src/store/journal';
import { initialStateWithNotes, initialStateWithoutActiveNotes } from '../../fixtures/journalFixtures';
import { authSlice } from '../../../src/store/auth';
import { authenticatedState } from '../../fixtures/authFixtures';

const mockStartNewNote = jest.fn();

jest.mock('../../../src/store/journal/journalThunks', () => ({
  // ...jest.requireActual('../../../src/store/journal/journalThunks'),
  startNewNote: () => mockStartNewNote
}));

const store = configureStore({
  reducer: {
    journal: journalSlice.reducer,
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: authenticatedState,
    journal: initialStateWithoutActiveNotes
  }
});


describe('Pruebas en <JournalPage />', () => {
  
  test('Debería renderizar el componente correctamente con nota activa', () => {

    const store = configureStore({
      reducer: {
        journal: journalSlice.reducer
      },
      preloadedState: {
        journal: initialStateWithNotes
      }
    });
    
    const { container } = render(
      <Provider store={ store } >
        <MemoryRouter>
          <JournalPage />
        </MemoryRouter>
      </Provider>
    );

    expect( container ).toMatchSnapshot();
    expect(screen.getByLabelText( 'note-view' )).toBeTruthy();

  });

  test('Debería renderizar el componente NothingSelectedView', () => {
    
    const { container } = render(
      <Provider store={ store } >
        <MemoryRouter>
          <JournalPage />
        </MemoryRouter>
      </Provider>
    );

    expect( container ).toMatchSnapshot();
    expect(screen.getByLabelText( 'nothing-note' )).toBeTruthy();
    expect(screen.getByText( authenticatedState.displayName )).toBeTruthy();

  });

  test('Debería el botón llamar startNewNote sin argumentos', () => {

    render(
      <Provider store={ store } >
        <MemoryRouter>
          <JournalPage />
        </MemoryRouter>
      </Provider>
    );

    const btnAddNewNote = screen.getByLabelText('add-new-note');
    fireEvent.click( btnAddNewNote );

    expect( mockStartNewNote ).toHaveBeenCalledTimes(1)


  });

})