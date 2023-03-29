import { collection } from "firebase/firestore";
import { db } from "./firebase.utils";

export const shoesCollectionRef = collection(db,'shoes');