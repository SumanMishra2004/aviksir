import { db } from '../firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 

export async function signInWithGoogle() {
  try {
    console.log("Starting Google sign-in process...");
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const uid = user.uid;
    const email = user.email;
    const name = user.displayName;
    const photoUrl = user.photoURL;

    console.log("User signed in successfully:", { uid, email, name, photoUrl });

    // Create or update the user in your Firestore database
    const userRef = doc(db, "users", uid);
    await setDoc(userRef, {
      uid,
      email,
      name,
      photoUrl,
    }, { merge: true });

    console.log("User data saved to Firestore:", { uid, email, name, photoUrl });

    return photoUrl
  } catch (error) {
    console.error("Error during sign-in process:", error);
    return error
}
}