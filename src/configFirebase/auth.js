import { auth } from './config'
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth'

export const doCreateUserWithEmailAndPassword = async (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password).then(()=>{localStorage.setItem('logged', true)})
}
export const doSignInWithEmailAndPassword = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password).then(()=>{localStorage.setItem('logged', true)})
}
export const doSignInWithGoogle = async () =>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider).then(()=>{localStorage.setItem('logged', true)})
    return result
}
export const doSignOut = ()=>{
    return auth.signOut().then(()=>{localStorage.setItem('logged', false)})
}