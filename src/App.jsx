import "./App.css";
import { HeaderNav } from "./components/HeaderNav";
import { Accueil } from "./components/Accueil";
import { Livres } from "./components/Livres";
import { Contact } from "./components/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  //useParams,
} from "react-router-dom";
import { BookProvider } from "./utils/context";

function App() {
  return (
    <div className="app container-fluid">
      <BookProvider>
        <Router>
          <HeaderNav />
          <Routes>
            <Route path="/Accueil" element={<Accueil />} />
            <Route path="/Livres" element={<Livres />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/Accueil" />} />
          </Routes>
        </Router>
      </BookProvider>
    </div>
  );
}

export default App;
