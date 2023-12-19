import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "./Firebase";
export const exportContact = createContext(null)

const auth = getAuth(app)
const CreateAuth = ({children }) => {
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState("ali hasan")

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleUser = ()=>{
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unSubscrib = onAuthStateChanged(auth , crrent =>{
            setUser(crrent)
        })
        return ()=>{
            unSubscrib()
        }
    })
    const authInfo = {
        user,
        createUser,
        loginUser,
        googleUser
    }
    return (
        <exportContact.Provider value={authInfo}>
            {children }
        </exportContact.Provider>
    );
};

export default CreateAuth;