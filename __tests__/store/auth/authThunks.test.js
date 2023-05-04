import { loginUser, logoutFirebase, registerUser, signInWithGoogle } from '../../../src/firebase/providers';
import {
  checkingCredentials,
  login,
  logout,
} from '../../../src/store/auth/authSlice';
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
  startLogout,
  startRegisterUser,
} from '../../../src/store/auth/authThunks';
import { clearNotesLogout } from '../../../src/store/journal';
import { demoUser } from '../../fixtures/authFixtures';

jest.mock("../../../src/firebase/providers");

describe("Pruebas en AuthThunks", () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test("Debería de invocar el checkingCredentials", async () => {
    await checkingAuthentication()(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("Debería startGoogleSignIn llamar checkingCredentials y login", async () => {
    const loginData = { ok: true, ...demoUser };
    await signInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("Debería startGoogleSignIn llamar checkingCredentials y logout", async () => {
    const loginData = { ok: false, errorMessage: "Un error en Google" };
    await signInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(
      logout({ errorMessage: loginData.errorMessage })
    );
  });

  test("startLoginWithEmailPassword debería llamar checkingCredentials y login  ", async() => {
   
    const loginUserData = { email: demoUser.email , password: "ADCDDC" };
    const loginData = { ok: true, ...demoUser }
    await loginUser.mockResolvedValue(loginData);

    await startLoginWithEmailPassword( loginUserData )( dispatch );

    expect( dispatch ).toHaveBeenCalledWith(checkingCredentials());
    expect( dispatch ).toHaveBeenCalledWith(login( demoUser ));
    expect( dispatch ).toHaveBeenCalledTimes(2);

  });

  test("startLoginWithEmailPassword debería llamar checkingCredentials y logout  ", async() => {
   
    const loginUserData = { email: demoUser.email , password: "ADCDDC" };
    const loginData = { ok: false, errorMessage: 'Error login' }
    await loginUser.mockResolvedValue(loginData);

    await startLoginWithEmailPassword( loginUserData )( dispatch );

    expect( dispatch ).toHaveBeenCalledWith(checkingCredentials());
    expect( dispatch ).toHaveBeenCalledWith(logout( { errorMessage: loginData.errorMessage } ));
    expect( dispatch ).toHaveBeenCalledTimes(2);

  });

  test('startRegisterUser deberia hacer logín al registrarse', async() => {
    
    const registerUserData = {
      email: demoUser.email,
      password: 'ACBC',
      displayName: demoUser.displayName,
    }
    const registerData = { ok: true, ...demoUser };
    await registerUser.mockResolvedValue( registerData );

    await startRegisterUser( registerUserData )( dispatch );

    expect( dispatch ).toHaveBeenCalledTimes(2);
    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( login( demoUser ) );

  });

  test('startRegisterUser deberia hacer logout al registrarse - Error', async() => {
    
    const registerUserData = {
      email: demoUser.email,
      password: 'ACBC',
      displayName: demoUser.displayName,
    }
    const registerData = { ok: false, errorMessage: 'Error Registro Google' };
    await registerUser.mockResolvedValue( registerData );

    await startRegisterUser( registerUserData )( dispatch );

    expect( dispatch ).toHaveBeenCalledTimes(2);
    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( logout( { errorMessage: registerData.errorMessage } ) );

  });

  test('startLogout debe de llamar logoutFirebase, clearNotesLogout, logout', async() => {
    
    await startLogout()( dispatch )

    expect( logoutFirebase ).toHaveBeenCalled();
    expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
    expect( dispatch ).toHaveBeenCalledWith( logout() );

  });


});
