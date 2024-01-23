import { usePanier } from "../hooks/usePanier";
import myPanier from "./panierStateLocal/panierLocalStorage";

const Card = ({ plat }) => {
  const { panier, setPanier } = usePanier();
  const {setPanierLocalStorage ,panierLocalStorage}  = myPanier()

  return (
    <div className="card shadow-sm">
      <img src={plat.image} alt="plat" width="100%" height="225" />
      <div className="card-body">
        <p className="card-text">{plat.title}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Voir
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => {
                setPanier([...panier, plat]);
                setPanierLocalStorage([...panierLocalStorage, plat]);
                console.log(panier);
              }}
            >
              Ajouter
            </button>
          </div>
          <small className="text-body-secondary">
            {plat.price}
            <sup>€</sup>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Card;
