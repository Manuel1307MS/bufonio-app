import { useState, useEffect, useMemo } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import {
  getCredentials,
  setAccessToken,
  clearAccessToken,
} from "@/services/apiService";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ accessToken: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { accessToken } = await getCredentials();
        setAuth({ accessToken });
        setAccessToken(accessToken);
      } catch {
        setAuth({ accessToken: null });
        clearAccessToken();
      } finally {
        setIsLoading(false);
      }
    };
    initializeAuth();
  }, []);

  const isAuthenticated = !!auth.accessToken;

  const value = useMemo(
    () => ({
      auth,
      setAuth,
      isAuthenticated,
      isLoading,
    }),
    [auth, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
