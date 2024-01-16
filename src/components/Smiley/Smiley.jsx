// Smiley.jsx
import './Smiley.css';

function Smiley({ smiley, onClick }) {
  return (
    <div className="smiley" onClick={onClick}>
      {smiley.image}
    </div>
  );
}

export default Smiley;
