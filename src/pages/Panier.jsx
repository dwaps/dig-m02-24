import { useEffect } from "react";
import {
  PanierContextProvider,
  usePanier,
} from "../components/hooks/usePanier";
import Footer from "../components/rapidoComponents/footer";
import Menu from "../components/rapidoComponents/menu";
import myPanier from "../components/rapidoComponents/panierStateLocal/panierLocalStorage";
import { Button } from "react-bootstrap";

const PanierPage = () => {
  const { panier, setPanier } = usePanier();
  const { panierLocalStorage, setPanierLocalStorage } = myPanier();

  useEffect(() => {
    setPanierLocalStorage(panier);
    setPanier(panierLocalStorage);
  }, [panier, panierLocalStorage]);

  return (
    <>
      <PanierContextProvider>
        <Menu />
        <div className="container my-5 ">
          <h2>Mon Panier</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Titre </th>
                <th scope="col">Prix</th>
              </tr>
            </thead>
            <tbody>
              {panierLocalStorage.map((plat, index) => (
                <tr key={plat.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{plat.title}</td>
                  <td>{plat.price}</td>
                  {/*<td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setPanierLocalStorage(
                          panierLocalStorage.filter((p) => p.id !== plat.id)
                        );
                        setPanier(panier.filter((p) => p.id !== plat.id));
                      }}
                    >
                      Supprimer
                    </button>
                    </td>*/}
                </tr>
              ))}
            </tbody>
          </table>

          <h3>
            {" "}
            Prix Total : {panierLocalStorage.reduce((a, b) => a + b.price, 0)} €
          </h3>
          <span className="d-grid gap-2 d-md-flex justify-content-md-end ">
            <Button
              variant="primary"
              // go to command page
              href="/command"
            >
              Commander
            </Button>
            <Button variant="secondary">Annuler</Button>
          </span>
        </div>
        <Footer />
      </PanierContextProvider>
    </>
  );
};

export default PanierPage;
