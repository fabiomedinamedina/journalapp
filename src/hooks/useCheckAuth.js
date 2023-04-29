import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => {
  
  const { status } =  useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged( FirebaseAuth, (user) => {
      if( !user ) return dispatch( logout() );
      const { email, uid, displayName, photoURL } = user;
      dispatch( login({ email, uid, displayName, photoURL }) )
      dispatch( startLoadingNotes() );
    });
  }, []);

  return {
    status
  }
}