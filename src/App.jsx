import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Smiley from "./components/Smiley/Smiley";
import BooksPage from "./components/Livre/BooksPage";
import { users } from "./models/Profile/index";
import { smileys } from "./models/Smiley/index";

function App() {
  const [selectedSmiley, setSelectedSmiley] = useState(null);

  const handleSmileyClick = (smiley) => {
    setSelectedSmiley(smiley);
  };

  return (
    <Router>
      <div className="container text-center text-white">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Accueil
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Profils
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/livres" className="nav-link">
                    Livres
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2 className="text-decoration-underline">
                  Quelle est ton humeur du jour ?
                </h2>
                <div className="smileys-box d-flex justify-content-center">
                  {smileys.map((smiley) => (
                    <Smiley
                      key={smiley.id}
                      smiley={smiley}
                      onClick={() => handleSmileyClick(smiley)}
                    />
                  ))}
                </div>

                <h2 className="p-4 mb-4 text-decoration-underline">
                  Profils Utilisateurs
                </h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  {users.map((user, index) => (
                    <div key={index} className="col">
                      <Profile user={user} selectedSmiley={selectedSmiley} />
                    </div>
                  ))}
                </div>
              </div>
            }
          />
          <Route path="/livres" element={<BooksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
