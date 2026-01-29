import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase.init';
const provider = new GoogleAuthProvider();




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();  // track current user
    const [loading, setLoading] = useState(true); // optional, for UI
    
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

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
        user
    }
    return (
        <AuthContext.Provider value={flag}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;