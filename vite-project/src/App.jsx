import "./App.css";
import Smiley from "./components/Smiley";
import Profile from "./components/Profile/Profile";
import { smileys } from "./models";
import { useState } from "react";
import Books from "./components/Books/Books";
import { BooksProvider } from "./models/utils/context";

function App() {
  const [humor, setHumor] = useState("");
  return (
    <div className="app">
      <Profile humor={humor}></Profile>
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
      <BooksProvider>
        <Books></Books>
      </BooksProvider>
    </div>
  );
}

export default App;
