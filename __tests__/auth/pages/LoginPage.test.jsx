import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';

import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { authSlice } from '../../../src/store/auth';
import { notAuthenticatedState } from '../../fixtures/authFixtures';


const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithLoginPassword = jest.fn();

jest.mock( '../../../src/store/auth/authThunks', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginWithEmailPassword: ({ email, password }) => {
    return () => mockStartLoginWithLoginPassword({ email, password })
  },
}));


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn()
}))

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: notAuthenticatedState
  }
});


describe('Pruebas en Logín Page', () => {

  beforeEach( () => jest.clearAllMocks() );

  test('Debería mostrar el componente correctamente', () => {
    
    render(
      <Provider store={ store } >
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    // screen.debug();
    expect( screen.getByText('Ingresa tus credenciales para continuar') ).toBeTruthy();
    expect( screen.getByText('Crear una cuenta') ).toBeTruthy();
    expect( screen.getAllByRole('button').length ).toBe( 2 );
    expect( screen.getAllByLabelText('input-form').length ).toBe( 2 );

  });

  test('El botón de iniciar con Google debería llamar el startGoogleSingIn', () => {
    
    render(
      <Provider store={ store } >
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const button = screen.getByLabelText( 'btn-google' );
    fireEvent.click( button );

    expect( mockStartGoogleSignIn ).toHaveBeenCalled();
    expect( mockStartGoogleSignIn ).toHaveBeenCalledTimes(1);

  });

  test('Submit debe llamar el startLoginWithEmailPassword con valores especificos', () => {

    const email = 'fabio@fabio.com';
    const password = 'Fabio.123';
    
    render(
      <Provider store={ store } >
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const emailField = screen.getByRole( 'textbox', {name: 'Correo electrónico'} );
    fireEvent.change( emailField, { target: {name: 'email', value: email} } );
    const passwordField = screen.getByTestId( 'Contraseña' );
    fireEvent.change( passwordField, { target: {name: 'password', value: password} } );

    const loginForm = screen.getByLabelText( 'submit-form' );
    fireEvent.submit( loginForm );


    expect( mockStartLoginWithLoginPassword ).toHaveBeenCalledTimes(1);
    expect( mockStartLoginWithLoginPassword ).toHaveBeenCalledWith({ email, password });



  });

})