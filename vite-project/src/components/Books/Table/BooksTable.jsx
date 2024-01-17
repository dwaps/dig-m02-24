import { useEffect, useState } from "react";
import BooksTableDetail from "./BooksTableDetail";

function BooksTable({ allBooks, onDeleteBook, onUpdateBook, onSortBooks }) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedBooks, setSortedBooks] = useState(allBooks);

  useEffect(() => {
    setSortedBooks([...allBooks]);
  }, [allBooks]);

  const handleSortByAuthor = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    onSortBooks();
    setSortOrder(newSortOrder);
  };

  const handleDelete = (bookId) => {
    onDeleteBook(bookId);
  };

  const handleUpdate = (book) => {
    book.title = "Nouveau titre";
    onUpdateBook(book);
  };

  return (
    <>
      <h2>Sous forme de tableau :</h2>
      <table>
        <thead>
          <tr>
            <th>Illustration</th>
            <th>Titre</th>
            <th onClick={handleSortByAuthor} style={{ cursor: "pointer" }}>
              Auteur {sortOrder === "asc" ? "↑" : "↓"}
            </th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortedBooks.map((book) => (
            <BooksTableDetail
              key={book.id}
              book={book}
              onDelete={() => handleDelete(book.id)}
              onUpdate={() => handleUpdate(book)}
            ></BooksTableDetail>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BooksTable;
