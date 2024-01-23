import { createContext, useContext, useState } from "react";
import myPanier from "../rapidoComponents/panierStateLocal/panierLocalStorage";

const { panierLocalStorage, setPanierLocalStorage } = myPanier();

export const PanierContext = createContext({
  panier: panierLocalStorage,
  setPanier: setPanierLocalStorage,
});

export function usePanier() {
  const { panier, setPanier } = useContext(PanierContext);
  return {
    panier,
    setPanier,
  };
}

export function PanierContextProvider({ children }) {
  const [panier, setPanier] = useState(panierLocalStorage);
  return (
    <PanierContext.Provider
      value={{
        panier,
        setPanier,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
}
