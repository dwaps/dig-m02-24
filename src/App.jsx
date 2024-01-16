import "./App.css";
import Profile from "./components/Profile";
import { profiles } from "./models/profiles";
import { livres } from "./models/livres";
import Livre from "./components/Livre";
import { smileys } from "./models/smileys";
import Smiley from "./components/Smiley";
import { useState } from "react";

function App() {
  const [humeur, setHumeur] = useState("");

  return (
    <div className="app">
      <div className="d-flex">
        {profiles.map((p) => (
          <Profile key={p.id} profile={p} humeur={humeur} />
        ))}
      </div>
      <h2>Quelle est ton humeur du jour ?</h2>
      <h3>{humeur}</h3>
      <div className="smileys-box">
        {smileys.map((smiley) => (
          <Smiley key={smiley.id} smiley={smiley} setHumeur={setHumeur} />
        ))}
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">SKU</th>
            <th scope="col">Titre</th>
            <th scope="col">Auteur</th>
          </tr>
        </thead>
        <tbody>
          {livres.map((l) => (
            <Livre key={l.id} livre={l} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
