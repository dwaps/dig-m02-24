import "./App.css";
import Profile from "./components/Profile";

import { profiles } from "./models";

function App() {
  return (
    <div className="App">
      <h1>Liste des profils</h1>
      <div className="content">
        <div className="profiles-div">
          {profiles.map((profile) => (
            <Profile key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
