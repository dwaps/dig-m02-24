import "./App.css";
import { profile } from "./models";
import Profile from "./components/Profile/Profile"

function App() {
  return (
    <div className="app">
      <Profile profile={profile}></Profile>
    </div>
  );
}

export default App;
