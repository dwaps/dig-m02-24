import { Link } from "react-router-dom";
import "./BooksTableDetail.css";

function BooksTableDetail({ book, onDelete }) {
  return (
    <tr>
      <td>
        <img className="image-table" src={book.url}></img>
      </td>
      <td>
        <Link to={`/livres/${book.id}`}>{book.title}</Link>
      </td>
      <td style={{ fontWeight: "bold" }}>{book.author}</td>
      <td>
        <button>Editer</button>
      </td>
      <td>
        <button onClick={() => onDelete(book.id)}>Supprimer</button>
      </td>
    </tr>
  );
}

export default BooksTableDetail;
