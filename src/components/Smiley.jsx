import "./Smiley.css";

function Smiley({ smiley, setHumeur }) {
  return <div onClick={() => setHumeur(smiley.image)}>{smiley.image}</div>;
}

export default Smiley;
