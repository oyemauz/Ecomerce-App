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
    const token = await userCredential.user.getIdToken();
    const user = await getUser(userCredential.user.uid);
    localStorage.setItem("x-auth-token", token);
    navigate("dashboard");
    toast.success("Successfully SignIn");
    return user;
  } catch (err) {
    toast.error(err.message);
  }
}

export async function logOutUser() {
  try {
    const isSignOut = await signOut(auth);
    localStorage.removeItem("x-auth-token");
    toast.success("User Logout Successfully");
    return isSignOut;
  } catch (error) {
    toast.error("Error: " + error.message);
  }
}

async function getUser(id) {
  const productsCol = doc(db, "users", id);
  const docSnap = await getDoc(productsCol);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    toast.error("No such document!");
  }
}

export { signInUser, getUser };

// Add new User Info into DB_Firestore

export async function AddUser(user) {
  const { name, status, imageUrl, email, userName, password } = user;
  const url = await uploadImageOnFireStore(imageUrl[0]);
  const colRef = collection(db, DB_COLLECTIONS.USERS);
  const docRef = doc(colRef);
  await setDoc(docRef, {
    id: docRef.id,
    name,
    imageUrl: url,
    status,
    email,
    userName,
    password,
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
