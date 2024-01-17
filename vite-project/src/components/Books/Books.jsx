import { useBooks } from "../../models/utils/context";
import "./Books.css";
// import BooksDetail from "./BooksDetail";
import BooksTable from "./Table/BooksTable";
import { Route, Routes } from "react-router-dom";
import BookDetailsPage from "./Table/BooksDetailPage";

function Books() {
  const { booksList, sortBooks, deleteBook, updateBook, addBook } = useBooks();

  const handleDelete = (bookId) => {
    deleteBook(bookId);
  };

  const handleSort = () => {
    sortBooks();
  };

  const handleUpdate = (updatedBook) => {
    updateBook(updatedBook);
  };

  const handleCreate = (createdBook) => {
    addBook(createdBook);
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
          element={
            <BooksTable
              allBooks={booksList}
              onDeleteBook={handleDelete}
              onUpdateBook={handleUpdate}
              onSortBooks={handleSort}
              onCreateBook={handleCreate}
            />
          }
        />
        <Route path="/:id" element={<BookDetailsPage allBooks={booksList} />} />
      </Routes>
    </>
  );
}

export default Books;
