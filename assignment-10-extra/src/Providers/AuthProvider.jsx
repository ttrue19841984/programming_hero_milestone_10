/* eslint-disable react/prop-types */
import { createContext, useEffect, useState,} from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google login
    const googleLogin = () => {
      return signInWithPopup(auth, googleProvider)
    }

      // create user
    const createUser = (email, password) => {
      setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    // SignOut
    const logOut = () =>{
      setLoading(true)
      return signOut(auth)
      
    }

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user in the auth state changed', currentUser);
        setUser(currentUser);
        setLoading(false)
      });
      return () => {
        unSubscribe()
      }
    },[])

    const authInfo = {
      googleLogin,
        createUser,
        signIn,
        logOut,
        user,
        loading,
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
