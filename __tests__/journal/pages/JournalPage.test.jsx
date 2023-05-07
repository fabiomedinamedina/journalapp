import { Provider } from 'react-redux';
import { JournalPage } from '../../../src/journal/pages/JournalPage';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { journalSlice } from '../../../src/store/journal';
import { initialStateWithNotes } from '../../fixtures/journalFixtures';

const store = configureStore({
  reducer: {
    journal: journalSlice.reducer
  },
  preloadedState: {
    journal: initialStateWithNotes
  }
});


describe('Pruebas en <JournalPage />', () => {
  
  test('Debería renderizar el componente correctamente', () => {
    
    render(
      <Provider store={ store } >
        <MemoryRouter>
          <JournalPage />
        </MemoryRouter>
      </Provider>
    );

  });

})