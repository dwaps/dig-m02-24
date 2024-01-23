const myPanier = () => {
  const panierLocalStorage = localStorage.getItem("panier")
    ? JSON.parse(localStorage.getItem("panier"))
    : [];

  const setPanierLocalStorage = (panier) => {
    localStorage.setItem("panier", JSON.stringify(panier));
  };

  return {
    panierLocalStorage,
    setPanierLocalStorage,
  };
};

export default myPanier;
