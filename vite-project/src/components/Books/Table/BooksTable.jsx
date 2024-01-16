import { useState } from "react";
import BooksTableDetail from "./BooksTableDetail";

function BooksTable({ allBooks, onDeleteBook }) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedBooks, setSortedBooks] = useState(allBooks);

  const handleSortByAuthor = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";

    const sorted = allBooks.slice().sort((a, b) => {
      const comparison = a.author.localeCompare(b.author);
      return sortOrder === "asc" ? comparison : -comparison;
    });

    setSortedBooks(sorted);
    setSortOrder(newSortOrder);
  };

  const handleDelete = (bookId) => {
    const updatedBooks = sortedBooks.filter((book) => book.id !== bookId);
    onDeleteBook(updatedBooks);
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
            ></BooksTableDetail>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BooksTable;
