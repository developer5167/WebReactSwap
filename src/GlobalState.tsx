import React, { createContext, useContext, useState } from "react";
interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logOut: () => void;
}
const GlobalContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logOut: () => {},
});

export const GlobalProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);
  return (
    <GlobalContext.Provider value={{ isLoggedIn, login, logOut }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useAuth = () => useContext(GlobalContext);
