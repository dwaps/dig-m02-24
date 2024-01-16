import { useContext } from "react";
import { BooksContext } from "../../models/utils/context";
import "./Books.css";
// import BooksDetail from "./BooksDetail";
import BooksTable from "./Table/BooksTable";
import { Route, Routes } from "react-router-dom";
import BookDetailsPage from "./Table/BooksDetailPage";

function Books() {
  const dataBooks = useContext(BooksContext);
  // const allBooks = dataBooks.books.map((book) => (
  //   <Link key={book.id} to={`/livres/${book.id}`}>
  //     <BooksDetail key={book.id} book={book} />
  //   </Link>
  // ));

  return (
    <>
      {/* <h2>Bibliothèque :</h2>
      <div className="books-container-box">{allBooks}</div> */}
      <h2>Sous forme de tableau :</h2>
      <Routes>
        <Route path="/" element={<BooksTable allBooks={dataBooks.books} />} />
        <Route
          path="/livres/:id"
          element={<BookDetailsPage allBooks={dataBooks.books} />}
        />
      </Routes>
    </>
  );
}

export default Books;
