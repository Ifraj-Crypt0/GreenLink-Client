import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../firebase.init';
const provider = new GoogleAuthProvider();




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    const emailSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailSignIn = (email,password) => {
        
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    // $$$ jsTasks
    // onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        // cleanup subscription
        return () => unsubscribe();
    }, []);

    const flag = {
        googleSignIn,
        user,
        loading,
        emailSignUp,
        logOut,
        emailSignIn
    }
    return (
        <AuthContext.Provider value={flag}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;