import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/config/firebase.config";
import toast from "react-hot-toast";
import { db } from "@/config/firebase.config";
import { collection, getDoc, doc, setDoc } from "firebase/firestore";
import { DB_COLLECTIONS } from "../constants/db.constants";
import { getStorage, getDownloadURL, uploadBytes } from "firebase/storage";
import { storageRef as sRef } from "@/config/firebaseStorage.config";

async function signInUser({ email, password }, navigate) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // eslint-disable-next-line no-unused-vars
    const token = await userCredential.user.getIdToken();
    //const user = await getUser(userCredential.user.uid);
    navigate("/dashboard");
    toast.success("Successfully Sign In");
    //  return user;
  } catch (err) {
    toast.error(err.message);
  }
}

export async function logOutUser() {
  try {
    const isSignOut = await signOut(auth);
    toast.success("User Logout Successfully");
    return isSignOut;
  } catch (error) {
    toast.error("Error: " + error.message);
    return null;
  }
}

async function getVendor(id) {
  const productsCol = await doc(db, "vendors", id);
  const docSnap = await getDoc(productsCol);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    toast.error("vendor  not found!");
    return null;
  }
}

export { signInUser, getVendor };

// Add new User Info into DB_Firestore

export async function AddVendor(vendor) {
  const { name, status, imageUrl, email } = vendor;
  const url = await uploadImageOnFireStore(imageUrl[0]);
  const colRef = collection(db, DB_COLLECTIONS.USERS);
  const docRef = doc(colRef);
  await setDoc(docRef, {
    id: docRef.id,
    name,
    imageUrl: url,
    status,
    email,
  });
}

async function uploadImageOnFireStore(file) {
  const storage = getStorage();
  const storageRefInstance = sRef(storage, `userImages/${file.name}`);

  await uploadBytes(storageRefInstance, file);

  const downloadURL = await getDownloadURL(storageRefInstance);
  // console.log('Uploaded file and got download URL:', downloadURL);
  return downloadURL;
}
