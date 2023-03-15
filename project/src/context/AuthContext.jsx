import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";


export const AuthContext = createContext();
export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState({})

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
    
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };


    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
            // console.log(user)
        });
        return () =>{
            unsub();
        }
    },[]);

    const value = {
        currentUser,
        signup,
        login,

    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

