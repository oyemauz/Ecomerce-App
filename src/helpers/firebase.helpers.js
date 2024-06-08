/* eslint-disable no-unused-vars */
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { DB_COLLECTIONS } from "@/constants";

/**
 * Function use to add document in firebase
 * @param {string[]} path -  firebase document path
 */
export const addDocument = async (path, payload) => {
  const colRef = collection(db, ...path);
  const docRef = doc(colRef);
  const data = { id: docRef.id, ...payload };
  return setDoc(docRef, data);
};

/**
 * Function use to update document in firebase
 * @param {}
 */
