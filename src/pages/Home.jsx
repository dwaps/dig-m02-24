import Footer from "../components/rapidoComponents/footer";
import Menu from "../components/rapidoComponents/menu";
import CarteSection from "../components/rapidoComponents/section/carte";
import PresentationSection from "../components/rapidoComponents/section/presatation";
import LocationSection from "../components/rapidoComponents/section/location";
import { PanierContextProvider } from "../components/hooks/usePanier";

const HomePage = () => {
  return (
    <>
      <PanierContextProvider>
        <Menu />
        <PresentationSection />
        <CarteSection />
        <LocationSection />
      </PanierContextProvider>
      <Footer />
    </>
  );
};

export default HomePage;
