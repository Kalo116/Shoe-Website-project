import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwNpNcbrIqKvu9GCBj7s_EJumxceYs6oA",
    authDomain: "shoe-shop-website.firebaseapp.com",
    projectId: "shoe-shop-website",
    storageBucket: "shoe-shop-website.firebasestorage.app",
    messagingSenderId: "988561986146",
    appId: "1:988561986146:web:09c589c5f64c59cc85773b"
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    
    const gender = window.prompt('Please select your gender (Male/Female):');
    
    if (result.user) {
        await createUserDocument(result.user, { gender });
    }
    
    return result;
};

export const db = getFirestore();

export const createUserDocument = async (userAuth, additionalInformation = {}) => {

    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('Error creating the user', error.message);
        };
    };

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);