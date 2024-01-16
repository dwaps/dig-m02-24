import { useContext } from "react";
import "./Name.css";
import { SmileysContext } from "../../utils/context";

function Name({ firstname, lastname }) {
  const { selected } = useContext(SmileysContext);

  return (
    <h5 className="card-title">
      {firstname} {lastname}
      <br />
      {selected ? selected?.image : "❔"}
    </h5>
  );
}

export default Name;
