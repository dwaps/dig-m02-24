import "./App.css";
import Profile from "./components/Profile/Profile";
import { users } from "./models/Profile/index";


function App() {
  return (
    <div className="container">
      <h2 className="text-center mb-4 text-white">Profils Utilisateurs</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {users.map((user, index) => (
          <div key={index} className="col">
            <Profile user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;