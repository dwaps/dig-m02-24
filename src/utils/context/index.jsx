import { createContext, useState } from "react";
import { smileys as sm } from "../../models/index";

export const SmileysContext = createContext();

export const SmileysProvider = ({ children }) => {
  const [smileys, setSmileys] = useState(sm);
  const [selected, setSelected] = useState(null);

  function onSelectSmiley(id) {
    const newSmileys = smileys.map((s) => {
      s.selected = false;
      if (s.id == id) s.selected = true;
      return s;
    });

    setSmileys(newSmileys);
    setSelected(newSmileys.find((s) => s.id == id));
  }

  return (
    <SmileysContext.Provider value={{ smileys, onSelectSmiley, selected }}>
      {children}
    </SmileysContext.Provider>
  );
};
