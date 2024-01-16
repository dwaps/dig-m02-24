import "./Smiley.css";

function Smiley({ smiley, selectSmiley }) {
  function handleClick() {
    selectSmiley(smiley.id);
  }

  return (
    <div onClick={handleClick} className={smiley.selected ? "selected" : ""}>
      {smiley.image}
    </div>
  );
}

export default Smiley;
