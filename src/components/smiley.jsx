import "./Smiley.css";
import { useState } from 'react';


function Smiley({ smiley, onClick }) {
  const [isSelected, handleSelect] = useState(false);
  
  return (
    <div
        onClick={() => {
        onClick()
        handleSelect(!isSelected);
      }
    } 
    className={`${isSelected}`}
    >{smiley.image}</div>
  )
}

export default Smiley;