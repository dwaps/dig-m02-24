import "./App.css";
import Profile from "./components/Profile";
import { profiles } from "./models/profiles";
import { livres } from "./models/livres";
import Livre from "./components/Livre";

function App() {
  return (
    <>
      <div className="d-flex">
        {profiles.map((p) => (
          <Profile key={p.id} profile={p} />
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
    </>
  );
}

export default App;
