import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Redirect, useSegments } from "expo-router";

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const segments = useSegments();
  const inAuthGroup = segments[0] === "(auth)";

  // Listen for Firebase auth changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((usr: any) => {
      setUser(usr);
    });
    return unsubscribe;
  }, []);

  // Redirect logic
  if (!user && !inAuthGroup) {
    return <Redirect href="/login" />;
  }

  if (user && inAuthGroup) {
    return <Redirect href="/(main)/profile" />;
  }

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}