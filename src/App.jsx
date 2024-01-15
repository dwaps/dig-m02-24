import "./App.css";
import Profile from "./components/Profile";
import { profiles } from "./models/profiles";

function App() {
  return (
    <>
      {profiles.map((p) => (
        <Profile key={p.id} profile={p} />
      ))}
    </>
  );
}

export default App;
