import React, {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
  Dispatch,
} from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

const AuthContext = createContext<{
  user: User | null;
  authLoading: boolean;
  setUser: Dispatch<SetStateAction<User | null>>;
  displayName: string;
  setDisplayName: Dispatch<SetStateAction<string>>;
}>({
  user: null,
  authLoading: true,
  setUser: () => {},
  displayName: '',
  setDisplayName: () => {}
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState<string>('');
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      setUser(currentUser);
      setDisplayName(currentUser?.displayName ?? '');
      setTimeout(() => setAuthLoading(false), 1000);
    });
    return unsubscribe;
  }, [setAuthLoading]);

  return (
    <AuthContext.Provider value={{ user, authLoading, setUser, displayName, setDisplayName }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth state anywhere
export const useAuth = () => useContext(AuthContext);
