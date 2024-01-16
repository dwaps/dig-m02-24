import "./App.css";
import Smiley from "./components/Smiley";
import Profile from "./components/Profile/Profile";
import { smileys } from "./models";
import { useState } from "react";
import Books from "./components/Books/Books";
import { BooksProvider } from "./models/utils/context";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";

const HeaderNav = () => (
  <ul className="HeaderNav">
    <li>
      <Link to="/accueil">Accueil</Link>
    </li>
    <li>
      <Link to="/livres">Livres</Link>
    </li>
    <li>
      <Link to="/profile">Profil</Link>
    </li>
  </ul>
);

const Accueil = ({ setHumor }) => (
  <>
    <h2>Quelle est ton humeur du jour ?</h2>
    <div className="smileys-box">
      {smileys.map((smiley) => (
        <Smiley
          key={smiley.id}
          smiley={smiley}
          onSelectSmiley={(selectedLabel) => setHumor(selectedLabel)}
        />
      ))}
    </div>
  </>
);

function App() {
  const [humor, setHumor] = useState("");
  return (
    <div className="header">
      <Router>
        <HeaderNav></HeaderNav>
        <Routes>
          <Route
            path="/accueil"
            element={<Accueil setHumor={setHumor}></Accueil>}
          ></Route>
          <Route
            path="/livres"
            element={
              <BooksProvider>
                <Books></Books>
              </BooksProvider>
            }
          ></Route>
          <Route
            path="/profile"
            element={<Profile humor={humor}></Profile>}
          ></Route>
          <Route path="*" element={<Navigate to="/accueil"></Navigate>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
