import { useContext } from "react";
import { BooksContext } from "../../models/utils/context";
import "./Books.css";
import BooksDetail from "./BooksDetail";
import BooksTable from "./Table/BooksTable";
import { Route, Routes } from "react-router-dom";
import BookDetailsPage from "./Table/BooksDetailPage";

function Books() {
  const dataBooks = useContext(BooksContext);
  const allBooks = dataBooks.books.map((book) => (
    <BooksDetail key={book.id} book={book}></BooksDetail>
  ));

  return (
    <>
      {/* <h2>Bibliothèque :</h2>
      <div className="books-container-box">{allBooks}</div> */}
      <h2>Sous forme de tableau :</h2>
      <Routes>
        <Route
          path="/livres/:id"
          element={<BookDetailsPage allBooks={allBooks} />}
        />

        <Route path="/" exact>
          <BooksTable allBooks={dataBooks.books}></BooksTable>
        </Route>
      </Routes>
    </>
  );
}

export default Books;
