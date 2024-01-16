import { smileys } from "../../models";
import { useState } from "react";

import Smiley from "./Smiley";

function Smileys(props) {
  const [smileySelected, setSmileySelected] = useState("");
  return (
    <div>
      <h2>Quel est ton mood actuel ?</h2>
      <div className="smileys-box">
        {smileys.map((smiley) => (
          <Smiley
            key={smiley.id}
            smiley={smiley}
            smileySelected={smileySelected}
            setSmileySelected={setSmileySelected}
            setCurrentMood={props.setCurrentMood}
          />
        ))}
      </div>
    </div>
  );
}

export default Smileys;
