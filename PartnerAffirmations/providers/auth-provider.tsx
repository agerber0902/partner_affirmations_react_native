import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

const AuthContext = createContext<{ user: User | null, authLoading: boolean }>({ user: null, authLoading: true });

type AuthProviderProps = {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
    const [authLoading, setAuthLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      setUser(currentUser);

      setTimeout(() => setAuthLoading(false), 1000)
    });
    return unsubscribe;
  }, [setAuthLoading]);

  return <AuthContext.Provider value={{ user, authLoading }}>{children}</AuthContext.Provider>;
};

// Hook to use auth state anywhere
export const useAuth = () => useContext(AuthContext);
