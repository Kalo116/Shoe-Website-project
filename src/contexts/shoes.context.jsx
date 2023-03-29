import { createContext, useState, useEffect } from "react";
import { shoesCollectionRef } from "../utils/firebase/firestore.collections";
import { onSnapshot } from "firebase/firestore";

export const ShoesContext = createContext({
    data: [],
    setData: () => []
});

export const ShoesProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const value = { data, setData };

    useEffect(() => {
        const unsubcribe = onSnapshot(shoesCollectionRef, (snapshot) => {
            setData(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        })
        return () => {
            unsubcribe();
        }
    }, []);

    return <ShoesContext.Provider value={value}>{children}</ShoesContext.Provider>
};