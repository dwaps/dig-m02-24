// LivresContext.jsx
import { createContext, useContext, useState } from "react";
import { livres } from "../../models/Livre/index";


const LivresContext = createContext();

export const LivresProvider = ({ children }) => {
  const [livresState, setLivresState] = useState(livres);
  const [triAuteur, setTriAuteur] = useState(null);

  const setLivres = (newLivres) => {
    setLivresState(newLivres);
  };

  const trierParAuteur = () => {
    if (triAuteur === "asc") {
      setLivresState([...livresState].sort((a, b) => a.author.localeCompare(b.author)));
      setTriAuteur("desc");
    } else {
      setLivresState([...livresState].sort((a, b) => b.author.localeCompare(a.author)));
      setTriAuteur("asc");
    }
  };

  return (
    <LivresContext.Provider value={{ livres: livresState, setLivres, trierParAuteur }}>
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
