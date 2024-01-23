import Footer from "../components/rapidoComponents/footer";
import Menu from "../components/rapidoComponents/menu";
import CarteSection from "../components/rapidoComponents/section/carte";
import PresentationSection from "../components/rapidoComponents/section/presatation";
import LocationSection from "../components/rapidoComponents/section/location";
import { PanierContextProvider } from "../components/hooks/usePanier";
import { AuthLocalContextProvider } from "../components/hooks/authlocal";

const HomePage = () => {
  return (
    <>
      <PanierContextProvider>
        <AuthLocalContextProvider>
          <Menu />
          <PresentationSection />
          <CarteSection />
          <LocationSection />
        </AuthLocalContextProvider>
      </PanierContextProvider>
      <Footer />
    </>
  );
};

export default HomePage;
