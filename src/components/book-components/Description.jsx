import "./Description.css";
import { Link } from "react-router-dom";

function Description(props) {
  return (
    <div className="description-book">
      <Link className="link" to={"/book-details/" + props.book.id}>
        <h2>{props.book.name}</h2>
      </Link>
      <p>{props.book.description}</p>
    </div>
  );
}

export default Description;
