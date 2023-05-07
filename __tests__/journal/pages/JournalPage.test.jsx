import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import { JournalPage } from '../../../src/journal/pages/JournalPage';
import { journalSlice } from '../../../src/store/journal';
import { initialStateWithNotes, initialStateWithoutActiveNotes } from '../../fixtures/journalFixtures';
import { authSlice } from '../../../src/store/auth';
import { authenticatedState } from '../../fixtures/authFixtures';

const store = configureStore({
  reducer: {
    journal: journalSlice.reducer
  },
  preloadedState: {
    journal: initialStateWithNotes
  }
});


describe('Pruebas en <JournalPage />', () => {
  
  test('Debería renderizar el componente correctamente con nota activa', () => {
    
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

})