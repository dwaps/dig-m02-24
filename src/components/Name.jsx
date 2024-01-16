import "./Name.css";

function Name({ firstname, lastname, mood }) {
  return (
    <h5 className="card-title">
      {firstname} {lastname}
      <br />
      {mood}
    </h5>
  );
}

export default Name;
