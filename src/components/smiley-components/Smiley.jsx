import "./Smiley.css";

function Smiley(props) {
  const handleClick = (id, image) => {
    props.setSmileySelected(id);
    props.setCurrentMood(image);
  };
  return (
    <div
      className={
        props.smiley.id === props.smileySelected ? "selected" : "not-selected"
      }
      onClick={() => handleClick(props.smiley.id, props.smiley.image)}
    >
      {props.smiley.image}
    </div>
  );
}

export default Smiley;
