import { useContext } from "react";
import { BooksContext } from "../../models/utils/context";
import "./Books.css";
import BooksDetail from "./BooksDetail";
import BooksTable from "./Table/BooksTable";

function Books() {
  const dataBooks = useContext(BooksContext);
  const allBooks = dataBooks.books.map((book) => (
    <BooksDetail key={book.id} book={book}></BooksDetail>
  ));

  return (
    <>
      <h2>Bibliothèque :</h2>
      <div className="books-container-box">{allBooks}</div>
      <h2>Sous forme de tableau :</h2>
      <BooksTable allBooks={dataBooks.books}></BooksTable>
    </>
  );
}

export default Books;
