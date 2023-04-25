import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
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
    let errorMessage = error.message;

    switch (errorCode) {
      case "auth/email-already-exists":
      case 'auth/email-already-in-use':
        errorMessage = "El usuario con este correo ya existe";
        break;
      case "auth/id-token-expired":
        errorMessage = "La auntenticación expiro";
        break;
      case "auth/invalid-password":
        errorMessage = "La contraseña debe tener más de 6 caracteres";
        break;
      default:
        break;
    }

    return {
      ok: false,
      errorMessage,
      errorCode,
    };
  }
};
