import "./Description.css";

function Description(props) {
  return (
    <div className="description-book">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Description;
