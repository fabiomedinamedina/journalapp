import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import { RegisterPage } from '../../../src/auth/pages/RegisterPage';
import { authSlice } from '../../../src/store/auth';
import { notAuthenticatedState } from '../../fixtures/authFixtures';

const mockStartRegisterUser = jest.fn();

jest.mock( '../../../src/store/auth/authThunks', () => ({
  startRegisterUser: ({ email, password, displayName }) => {
    return () => mockStartRegisterUser({ email, password, displayName })
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

describe('Pruebas en <RegisterPage />', () => {

  beforeEach( () => jest.clearAllMocks() );

  test('Debería renderizar el componente correctamente', () => {
    render(
      <Provider store={ store } >
        <MemoryRouter>
          <RegisterPage />
        </MemoryRouter>
      </Provider>
    );

    // screen.debug();
    expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toBe( 'Proceso de registro' );
    expect( screen.getByText('Iniciar sesión') ).toBeTruthy();
  });

  test('Debería ser llamado startRegisterUser con datos correctos', () => {

    const userRegister = {
      displayName: 'Fabio Medina',
      email: 'fabio@fabio.com',
      password: 'Fabio.1234',
    }

    render(
      <Provider store={ store } >
        <MemoryRouter>
          <RegisterPage />
        </MemoryRouter>
      </Provider>
    );

    const nameField = screen.getByRole('textbox', {name: 'Nombre completo'});
    const emailField = screen.getByRole('textbox', {name: 'Correo electrónico'});
    const passwordField = screen.getByTestId( 'Contraseña' );

    fireEvent.change( nameField, { target: { name: 'displayName', value: userRegister.displayName } } );
    fireEvent.change( emailField, { target: { name: 'email', value: userRegister.email } } );
    fireEvent.change( passwordField, { target: { name: 'password', value: userRegister.password } } );
    // screen.debug()

    const registerForm = screen.getByLabelText( 'form-submit' );
    fireEvent.submit( registerForm );

    expect( mockStartRegisterUser ).toHaveBeenCalledTimes(1);
    expect( mockStartRegisterUser ).toHaveBeenCalledWith(userRegister);

    
  });

  test('No debería ser llamado startRegisterUser con datos incorrectos', () => {

    const userRegister = {
      displayName: 'Fabio Medina',
      email: 'fabio@.com',
      password: 'Fa1234',
    }

    render(
      <Provider store={ store } >
        <MemoryRouter>
          <RegisterPage />
        </MemoryRouter>
      </Provider>
    );

    const nameField = screen.getByRole('textbox', {name: 'Nombre completo'});
    const emailField = screen.getByRole('textbox', {name: 'Correo electrónico'});
    const passwordField = screen.getByTestId( 'Contraseña' );

    fireEvent.change( nameField, { target: { name: 'displayName', value: userRegister.displayName } } );
    fireEvent.change( emailField, { target: { name: 'email', value: userRegister.email } } );
    fireEvent.change( passwordField, { target: { name: 'password', value: userRegister.password } } );
    // screen.debug()

    const registerForm = screen.getByLabelText( 'form-submit' );
    fireEvent.submit( registerForm );

    expect( mockStartRegisterUser ).not.toHaveBeenCalled();

    
  });

})