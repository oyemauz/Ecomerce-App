import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/config/firebase.config";
import toast from "react-hot-toast";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase.config";

async function signInUser({ email, password }, navigate) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const token = await userCredential.user.getIdToken();
    localStorage.setItem("x-auth-token", token);
    navigate("/dashboard");
    toast.success("Successfully SignIn");
  } catch (err) {
    toast.error(err.message);
  }
}

export async function logOutUser() {
  try {
    const isSignOut = await signOut(auth);
    localStorage.removeItem("x-auth-token");
    toast("User Logout Successfully");
    return isSignOut;
  } catch (error) {
    toast.error("Error: " + error.message);
  }
}

export async function getUser(id = "7Mk5JFOcjdWnPkOHsTbIm8E2hyX2") {
  const productsCol = doc(db, "admins", id);
  const docSnap = await getDoc(productsCol);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    toast.error("No such document!");
  }
}

export { signInUser };
