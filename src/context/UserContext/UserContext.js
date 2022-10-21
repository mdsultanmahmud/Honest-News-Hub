import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.init';
const auth = getAuth(app)
export const AuthContext = createContext()
const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()

    const loginUserWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email ,password)
    }

    const Login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email , password)
    }

    const GetName = (name) =>{
        return updateProfile(auth.currentUser, {displayName: name})
    }
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                setUser(currentUser)
                console.log('state changed user: ', currentUser)
            }else{
                setUser({})
            }
        })
        return () => unsubscribe()
    },[])

    const AuthInfo = {user, loginUserWithGoogle, logOut, createUser, Login, GetName}
    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;