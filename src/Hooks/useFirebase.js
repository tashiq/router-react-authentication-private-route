import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, sendPasswordResetEmail, sendEmailVerification, createUserWithEmailAndPassword, GithubAuthProvider } from 'firebase/auth';
import initAuthentication from '../Firebase/Firebase.init'
initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider);
    }
    const gitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message));
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Notification: Successfully Logged out!")
                setUser({});
            })
            .catch(error => setError(error.message))
    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => setError(error.message))
    }
    const forgotPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(console.log('Notification: Reset Mail sent'))
            .catch(error => setError(error.message));
    }
    const verificationMail = () => {
        sendEmailVerification(auth.currentUser)
            .then(console.log('Notification: Varification mail sent'))
            .catch(error => setError(error.message))
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    return {
        user, error, googleSignIn, gitHubSignIn, logOut,
        createNewUser, forgotPassword, verificationMail
    }
};


export default useFirebase;