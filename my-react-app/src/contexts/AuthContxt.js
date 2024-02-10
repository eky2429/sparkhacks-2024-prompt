import React, {useContext, useState, useEffect} from 'react'
import {auth, db} from '../firebase'
import { ref, set, get, update} from 'firebase/database'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = getAuth();

const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext);
}


export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    function createUser(email,password) {
        return createUserWithEmailAndPassword(Auth, email,password)
            .then((userCredential)=>{
                setCurrentUser(userCredential.user);
                initializeUserProgress(userCredential.user.uid);
                return userCredential.user;
            })
            .catch(error =>{
                    console.error('Error creating user', error);
                    throw error;
                });
    }
    function loginUser(email,password) {
        return signInWithEmailAndPassword(Auth, email, password)
            .then((userCredential)=>{
                setCurrentUser(userCredential.user);
                return userCredential.user;
            })
            .catch(error =>{
                    console.error('Error logging user', error);
                    throw error;
                });
    }

    async function initializeUserProgress(uid) {
        const progressRef = ref(db, `progress/${uid}`)
        await set(progressRef, {level: 1})
    }

    async function getUserLevel(uid) {
        const progressRef = ref(db, `progress/${uid}`)
        const snapshot = await get(progressRef)
        return snapshot.val()?.level || 1;
    }

    async function updateUserlevel(uid, newLevel) {
        const progressRef = ref(db, `progress/${uid}`)
        await update(progressRef, {level: newLevel})
    }

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsub
    }, [setCurrentUser, setLoading])

    const value = {
        currentUser,
        createUser,
        loginUser,
        loading,
        getUserLevel,
        updateUserlevel
    }
  return (
    <AuthContext.Provider value = {value}>
        {children}
    </ AuthContext.Provider>
  )
}
