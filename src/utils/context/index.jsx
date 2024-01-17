import { createContext, useState } from "react";
import { smileys, books } from "../../models/index";

export const SmileyImageContext = createContext();

//Attention ! Ne pas utiliser, pas encore fonctionnel
export const SmileyImageProvider = ({ children }) => {
  const [smileyImage, setSmileyImage] = useState("");

  function getSmileyImage(id) {
    const current = smileys.find((sm) => sm.id === id);
    setSmileyImage(current.image);
  }

  return (
    <SmileyImageContext.Provider
      value={{ smileyImage, getSmileyImage: getSmileyImage }}
    >
      {children}
    </SmileyImageContext.Provider>
  );
};

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [tabOfBooks, setTabOfBooks] = useState(books);

  function trierTableauAsc() {
    setTabOfBooks([...books].sort((a, b) => a.auteur.localeCompare(b.auteur)));
  }

  function trierTableauDesc() {
    setTabOfBooks([...books].sort((a, b) => b.auteur.localeCompare(a.auteur)));
  }

  return (
    <BookContext.Provider
      value={{
        tabOfBooks,
        triTableauAsc: trierTableauAsc,
        triTableauDesc: trierTableauDesc,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
