import { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import enterKey from "../../../assets/enter-key.png";
import { BooksContext } from "../../../utils/context";
import "./Books.css";

function Books() {
  const { books, setBooks } = useContext(BooksContext);

  function editBook(id) {
    books.forEach((b) => {
      if (b.id == id) {
        b.editable = true;
      } else {
        b.editable = false;
      }
    });
    const book = books.find((b) => b.id === id);
    setBooks([...books]);
  }

  function deleteBook(id) {
    setBooks(books.filter((b) => b.id !== id));
  }

  function handleSubmit(e, b) {
    e.preventDefault();
    b.title = e.target.title;
    b.author = e.target.author;
    b.country = e.target.country;
    b.editable = false;
    setBooks([...books]);
  }

  return (
    <tbody>
      {books.map((b) => (
        <tr key={b.id}>
          {!b.editable ? (
            <>
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
            </>
          ) : (
            <>
              {createPortal(<form id="formEditBook" />, document.body)}
              <td>
                <input type="text" name="title" form="formEditBook" />
              </td>
              <td>
                <input type="text" name="author" form="formEditBook" />
              </td>
              <td>
                <input type="text" name="country" form="formEditBook" />
              </td>
              <td className="text-center" style={{ cursor: "not-allowed" }}>
                <img src={enterKey} alt="touche entrée" width={20} />
              </td>
            </>
          )}
        </tr>
      ))}
    </tbody>
  );
}

export default Books;
