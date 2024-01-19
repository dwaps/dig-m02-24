import { createContext, useContext, useState } from "react";

export const PanierContext = createContext({
  panier: [],
  setPanier: () => {},
});

export function usePanier() {
  const { panier, setPanier } = useContext(PanierContext);
  return {
    panier,
    setPanier,
  };
}

export function PanierContextProvider({ children }) {
  const [panier, setPanier] = useState([]);
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
