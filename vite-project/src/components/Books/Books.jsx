import { books } from "../../models";
import "./Books.css";
import BooksDetail from "./BooksDetail";
import BooksTable from "./Table/BooksTable";

function Books() {
  const allBooks = books.map((book) => (
    <BooksDetail key={book.id} book={book}></BooksDetail>
  ));

  return (
    <>
      <h2>Bibliothèque :</h2>
      <div className="books-container-box">{allBooks}</div>
      <h2>Sous forme de tableau :</h2>
      <BooksTable allBooks={books}></BooksTable>
    </>
  );
}

export default Books;
