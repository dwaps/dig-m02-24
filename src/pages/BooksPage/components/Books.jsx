import { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../../../utils/context";
import "./Books.css";

function Books() {
  const { books } = useContext(BooksContext);

  return (
    <tbody>
      {books.map((b) => (
        <tr key={b.id}>
          <td>
            <Link to={`/books/${b.id}`}>{b.title}</Link>
          </td>
          <td>{b.author}</td>
          <td>{b.country}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default Books;
