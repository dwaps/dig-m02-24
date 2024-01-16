import { useContext } from "react";
import "./Smiley.css";
import { SmileysContext } from "../../utils/context";

function Smiley({ smiley }) {
  const { onSelectSmiley } = useContext(SmileysContext);

  return (
    <div
      onClick={() => onSelectSmiley(smiley.id)}
      className={smiley.selected ? "selected" : ""}
    >
      {smiley.image}
    </div>
  );
}

export default Smiley;
