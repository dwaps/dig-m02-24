import "./Smiley.css";

function Smiley({ smiley, onSelectSmiley }) {
  return (
    <div
      className="smiley"
      onClick={() => {
        onSelectSmiley(smiley.label);
      }}
    >
      {smiley.image}
    </div>
  );
}

export default Smiley;
