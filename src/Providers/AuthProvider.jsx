import React, { createContext, useState } from 'react';
import App from '../App';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase';
export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signUp = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        createUser,
        user,
        signUp,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;