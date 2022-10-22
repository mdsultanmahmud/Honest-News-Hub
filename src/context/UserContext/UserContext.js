import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.init';
const auth = getAuth(app)
export const AuthContext = createContext()
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)


    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const loginUserWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    const loginUserWithGithub = () => {
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const GetName = (userProfile) => {
        return updateProfile(auth.currentUser, userProfile)
    }
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
                setLoader(false)
                console.log('state changed user: ', currentUser)
            } else {
                setLoader(false)
                setUser({})
            }
        })
        return () => unsubscribe()
    }, [])

    const AuthInfo = {
        user, loader, loginUserWithGoogle, logOut,
        createUser, Login, GetName, loginUserWithGithub, verifyEmail, setLoader
    }
    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;