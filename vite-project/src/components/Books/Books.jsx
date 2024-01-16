import { useContext, useState } from "react";
import { BooksContext } from "../../models/utils/context";
import "./Books.css";
// import BooksDetail from "./BooksDetail";
import BooksTable from "./Table/BooksTable";
import { Route, Routes } from "react-router-dom";
import BookDetailsPage from "./Table/BooksDetailPage";

function Books() {
  const { books: initialBooks } = useContext(BooksContext);
  const [books, setBooks] = useState(initialBooks);

  const handleDelete = (updatedBooks) => {
    console.log(updatedBooks);
    setBooks(updatedBooks);
  };
  // const allBooks = dataBooks.books.map((book) => (
  //   <Link key={book.id} to={`/livres/${book.id}`}>
  //     <BooksDetail key={book.id} book={book} />
  //   </Link>
  // ));

  return (
    <>
      {/* <h2>Bibliothèque :</h2>
      <div className="books-container-box">{allBooks}</div> */}
      <Routes>
        <Route
          path="/"
          element={<BooksTable allBooks={books} onDeleteBook={handleDelete} />}
        />
        <Route path="/:id" element={<BookDetailsPage allBooks={books} />} />
      </Routes>
    </>
  );
}

export default Books;
