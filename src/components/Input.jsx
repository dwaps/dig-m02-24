import { useState } from "react";

function Input() {
  const [saisie, setSaisie] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setSaisie(e.target.value)} />
      <p>{saisie}</p>
    </div>
  );
}

export default Input;
