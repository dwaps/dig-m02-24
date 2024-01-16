import "./App.css";
import Profile from "./components/Profile/Profile";
import SmileyBox from "./components/Smiley/SmileyBox";
import { SmileysProvider } from "./utils/context";

function App() {
  return (
    <div className="app">
      <SmileysProvider>
        <Profile />
        <SmileyBox />
      </SmileysProvider>
    </div>
  );
}

export default App;
