import { usePanier } from "../components/hooks/usePanier";
import Menu from "../components/rapidoComponents/menu";

const PanierPage = () => {
  const { panier } = usePanier();
  return (
    <div>
      <h1>Panier</h1>
      <Menu />
    </div>
  );
};

export default PanierPage;
