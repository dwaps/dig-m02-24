import "./App.css";
import Profile from "./components/Profile/Profile";
import Livre from "./components/Livre/Livre";
import { users } from "./models/Profile/index";
import { livres } from "./models/Livre/index";

function App() {
  return (
    <div className="container text-center text-white">
      <h2 className="p-4 mb-4 text-decoration-underline">Profils Utilisateurs</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {users.map((user, index) => (
          <div key={index} className="col">
            <Profile user={user} />
          </div>
        ))}
      </div>
      <div className="container mt-4">
        <h2 className="p-4 mb-4 text-decoration-underline">Liste de Livres</h2>
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Titre</th>
              <th scope="col">Auteur</th>
              <th scope="col">Genre</th>
            </tr>
          </thead>
          <tbody>
            {livres.map((livre, index) => (
              <Livre
                key={index}
                title={livre.title}
                author={livre.author}
                genre={livre.genre}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
