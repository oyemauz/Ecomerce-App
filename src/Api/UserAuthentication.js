import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '@/config/firebase.config';

async function signInUser({ email, password }, navigate) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken();
        localStorage.setItem("x-auth-token", token);
        navigate("/dashboard")
    } catch (err) {
        console.log(err.message)
    }
}

export async function logOutUser() {
    try {
        const isSignOut = await signOut(auth);
        localStorage.removeItem("x-auth-token")
        return isSignOut;
    }
    catch (error) {
        console.log(error.message);
    }
}

export { signInUser }

