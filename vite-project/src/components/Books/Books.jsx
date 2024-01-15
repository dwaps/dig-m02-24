import { books } from "../../models";
import "./Books.css";
import BooksDetail from "./BooksDetail";

function Books() {
  const arrayDataItems = books.map((book) => (
    <BooksDetail key={book.id} book={book}></BooksDetail>
  ));

  return (
    <div className="books-container-box">
      <ul>{arrayDataItems}</ul>
    </div>
  );
}

export default Books;
