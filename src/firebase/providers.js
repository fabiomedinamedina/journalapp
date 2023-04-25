import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult( result );

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
      errorCode,
    };
  }
};

export const loginUser = async({email, password}) => {
  try {

    const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { displayName,  photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
    
  } catch (error) {

    const errorCode = error.code;
    const getErrorMessage = errorMessageString( errorCode );
    const errorMessage = (!!getErrorMessage) ? getErrorMessage : error.message;
    return {
      ok: false,
      errorMessage,
      errorCode,
    };

  }
}

export const registerUser = async ({ email, password, displayName }) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {

    const errorCode = error.code;
    const getErrorMessage = errorMessageString( errorCode );
    const errorMessage = (!!getErrorMessage) ? getErrorMessage : error.message;
    return {
      ok: false,
      errorMessage,
      errorCode,
    };
  }
};


const errorMessageString = (codeError) => {
  switch (codeError) {
    case "auth/email-already-exists":
    case 'auth/email-already-in-use':
      return "El usuario con este correo ya existe";
    case "auth/id-token-expired":
      return "La auntenticación expiro";
    case "auth/invalid-password":
      return "La contraseña debe tener más de 6 caracteres";
    case "auth/user-not-found":
      return "El usuario no existe";
    case "auth/wrong-password":
      return "Contraseña invalida";
    case "auth/too-many-requests":
      return "Cuenta bloqueada temporalmente por muchos intentos fallidos";
    default:
      return null
  }
}