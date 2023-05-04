import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth";
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixtures";

describe('Pruebas en Slice de Auth', () => {
  
  test('Debe de regresar el estado inicial y llamarse auth', () => {

    const state = authSlice.reducer( initialState, {} );
    
    expect( authSlice.name ).toBe('auth');
    expect( state ).toEqual( initialState );

  });

  test('Debería realizar la autenticación', () => {

    const state = authSlice.reducer( initialState, login( demoUser ) );
    expect( state ).toEqual( authenticatedState );

  });

  test('Debería hacer el logout sin error', () => {

    const state = authSlice.reducer( authenticatedState, logout() );
    expect( state ).toEqual( notAuthenticatedState );
    
  });

  test('Debería hacer el logout y mostrar error', () => {

    const errorMessage = 'Credenciales incorrectas';
    const state = authSlice.reducer( authenticatedState, logout({ errorMessage }) );
    expect( state.errorMessage ).toBe( errorMessage );

  });

  test('Debería cambiar el status a checking', () => {

    const state = authSlice.reducer( authenticatedState, checkingCredentials() );
    expect( state.status ).toBe( 'checking' );

  });

})