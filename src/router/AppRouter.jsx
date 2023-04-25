import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui/components";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase";
import { login, logout } from "../store/auth";

export const AppRouter = () => {

  const { status } =  useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged( FirebaseAuth, (user) => {
      if( !user ) return dispatch( logout() );
      const { email, uid, displayName, photoURL } = user;
      console.log(user);
      dispatch( login({ email, uid, displayName, photoURL }) )
  
    });
  }, []);
    
  if( status === 'checking' ) return <CheckingAuth />

  return (
    <Routes>
      {
        ( status === 'authenticated')
        ? <Route path="/*" element={ <JournalRoutes /> } />
        : <Route path="auth/*" element={ <AuthRoutes /> } />
      }
      <Route path="/*" element={ <Navigate to={'/auth/login'} /> } />
    </Routes>
  );
};
