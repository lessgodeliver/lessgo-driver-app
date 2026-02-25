import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, signOut, User } from "firebase/auth";

export async function loginWithGoogle(): Promise<User> {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
}

export async function logout() {
  await signOut(auth);
}

export async function getCurrentUser(): Promise<User | null> {
  return auth.currentUser;
}

import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

export async function firebaseGoogleSignIn(idToken: string) {
  const credential = GoogleAuthProvider.credential(idToken);
  const userCredential = await signInWithCredential(auth, credential);
  return userCredential.user;
}