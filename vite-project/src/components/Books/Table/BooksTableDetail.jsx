import { Link } from "react-router-dom";
import "./BooksTableDetail.css";

function BooksTableDetail({ book }) {
  return (
    <tr>
      <td>
        <img className="image-table" src={book.url}></img>
      </td>
      <td>
        <Link to={`/livres/${book.id}`}>{book.title}</Link>
      </td>
      <td style={{ fontWeight: "bold" }}>{book.author}</td>
      <td style={{ color: book.stars > 5 ? "green" : "orange" }}>
        {book.stars}
      </td>
    </tr>
  );
}

export default BooksTableDetail;
