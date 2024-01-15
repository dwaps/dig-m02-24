import { books } from "../../models";
import "./Books.css";
import BooksDetail from "./BooksDetail";

function Books() {
  const arrayDataItems = books.map((book) => (
    <BooksDetail key={book.id} book={book}></BooksDetail>
  ));

  return (
    <>
      <h2>Bibliothèque :</h2>
      <div className="books-container-box">{arrayDataItems}</div>
    </>
  );
}

export default Books;
