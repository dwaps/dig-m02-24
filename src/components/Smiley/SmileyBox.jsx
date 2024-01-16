import { useContext } from "react";
import { SmileysContext } from "../../utils/context";
import Smiley from "./Smiley";

function SmileyBox() {
  const { smileys } = useContext(SmileysContext);

  return (
    <>
      <h2>Quelle est ton humeur du jour ?</h2>
      <div className="smileys-box">
        {smileys.map((smiley) => (
          <Smiley key={smiley.id} smiley={smiley} />
        ))}
      </div>
    </>
  );
}

export default SmileyBox;
