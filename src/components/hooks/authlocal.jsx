import { createContext, useContext, useState } from "react";

export const userLocal = () => {
  const userLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : [];

  const setUserLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  return {
    userLocalStorage,
    setUserLocalStorage,
  };
};

const { userLocalStorage, setUserLocalStorage } = userLocal();

export const AuthLocalContext = createContext({
  currentUser: userLocalStorage,
  setCurrentUser: setUserLocalStorage,
});

export function useAuthLocal() {
  const { currentUser, setCurrentUser } = useContext(AuthLocalContext);
  return {
    currentUser,
    setCurrentUser,
  };
}

export function AuthLocalContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <AuthLocalContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthLocalContext.Provider>
  );
}
