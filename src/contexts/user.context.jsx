import { createContext, useState, useEffect } from "react";
import { createUserDocument, db, onAuthStateChangeListener } from "../utils/firebase/firebase.utils";
import { doc, getDoc } from "firebase/firestore";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    currentUserData: null,
    setCurrentUserData: () => null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [currentUserData, setCurrentUserData] = useState(null);
    const value = { currentUser, currentUserData, setCurrentUser, setCurrentUserData };

    useEffect(() => {
        const unsubcribe = onAuthStateChangeListener(async (user) => {
            if (user) {
                await createUserDocument(user);
                const docRef = doc(db, 'users', `${user.uid}`);
                getDoc(docRef)
                    .then((doc) => {
                        setCurrentUserData(doc.data());
                    })
                    .catch(err => console.log(err))
            }
            setCurrentUser(user);
        });

        return unsubcribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};