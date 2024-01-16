// LivresContext.jsx
import { createContext, useContext, useState } from "react";
import { livres } from "../../models/Livre/index"

const LivresContext = createContext();

export const LivresProvider = ({ children }) => {
  const [livresState, setLivresState] = useState(livres);
  const [triAuteur, setTriAuteur] = useState(null);

  const setLivres = (newLivres) => {
    setLivresState(newLivres);
  };

  const trierParAuteur = () => {
    // Implémentation de la fonction de tri par auteur (à ajuster selon vos besoins)
    const newLivres = [...livresState];
    newLivres.sort((a, b) => (triAuteur === "asc" ? a.author.localeCompare(b.author) : b.author.localeCompare(a.author)));
    setLivresState(newLivres);
    setTriAuteur(triAuteur === "asc" ? "desc" : "asc");
  };

  const ajouterLivre = (nouveauLivre) => {
    // Implémentation de la fonction d'ajout d'un nouveau livre
    setLivresState((prevLivres) => [...prevLivres, nouveauLivre]);
  };

  const supprimerLivre = (livre) => {
    // Implémentation de la fonction de suppression d'un livre
    const updatedLivres = livresState.filter((l) => l !== livre);
    setLivresState(updatedLivres);
  };

  const modifierLivre = (livreModifie) => {
    // Implémentation de la fonction de modification d'un livre (à ajuster selon vos besoins)
    const updatedLivres = livresState.map((livre) => (livre.title === livreModifie.title ? livreModifie : livre));
    setLivresState(updatedLivres);
  };

  return (
    <LivresContext.Provider value={{ livres: livresState, setLivres, trierParAuteur, ajouterLivre, supprimerLivre, modifierLivre }}>
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
