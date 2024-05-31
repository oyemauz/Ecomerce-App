import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '@/config/firebase.config';

async function signInUser(email, password) {

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in
        const user = userCredential.user;
        return user;
    } catch (error) {
        const errorMessage = error.message;
        return errorMessage;
    }
}

export async function logOutUser() {
    try {
        const isSignOut = await signOut(auth);
        console.log(isSignOut);
        return isSignOut;
    }
    catch (error) {
        console.log(error.message);
    }
}

export { signInUser }

