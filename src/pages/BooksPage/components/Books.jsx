import { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../../../utils/context";
import "./Books.css";
import { Button, ButtonGroup } from "react-bootstrap";

function Books() {
  const { books, setBooks } = useContext(BooksContext);

  function editBook(id) {
    const book = books.find((b) => b.id === id);
    console.log(book);
  }

  function deleteBook(id) {
    setBooks(books.filter((b) => b.id !== id));
  }

  return (
    <tbody>
      {books.map((b) => (
        <tr key={b.id}>
          <td>
            <Link to={`/books/${b.id}`}>{b.title}</Link>
          </td>
          <td>{b.author}</td>
          <td>{b.country}</td>
          <td>
            <ButtonGroup className="bts-action">
              <Button onClick={() => editBook(b.id)}>✏️</Button>
              <Button onClick={() => deleteBook(b.id)}>🗑️</Button>
            </ButtonGroup>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default Books;
