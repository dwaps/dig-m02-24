import "./Smiley.css";

function Smiley({ smiley, onClick }) {
  return <div onClick={onClick}>{smiley.image}</div>
}

export default Smiley;