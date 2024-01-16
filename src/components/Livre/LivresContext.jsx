// LivresContext.jsx
import { createContext, useContext, useState } from "react";
import { livres } from "../../models/Livre";

const LivresContext = createContext();

export const LivresProvider = ({ children }) => {
  const [livresState, setLivresState] = useState(livres);

  const setLivres = (newLivres) => {
    setLivresState(newLivres);
  };

  return (
    <LivresContext.Provider value={{ livres: livresState, setLivres }}>
      {children}
    </LivresContext.Provider>
  );
};

export const useLivres = () => {
  const context = useContext(LivresContext);
  if (!context) {
    throw new Error("useLivres must be used within a LivresProvider");
  }
  return context;
};
