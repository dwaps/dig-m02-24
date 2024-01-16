import { useState } from "react";
import "./App.css";
import Smiley from "./components/Smiley";
import { smileys as sm } from "./models";

function App() {
  const [smileys, setSmileys] = useState(sm);

  function onSelectSmiley(id) {
    const selected = smileys
      .map((sm) => {
        sm.selected = false;
        return sm;
      })
      .find((sm) => sm.id === id);

    selected.selected = true;
    setSmileys([...smileys]);
  }

  return (
    <div className="app">
      <h2>Quelle est ton humeur du jour ?</h2>
      <div className="smileys-box">
        {smileys.map((smiley) => (
          <Smiley
            key={smiley.id}
            smiley={smiley}
            selectSmiley={onSelectSmiley}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
