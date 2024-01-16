import { useState } from "react";
import books from "./bookData";
import BookRow from "./bookRow";
const Books = () => {
  const [book, setBook] = useState(books);
  const [shortBy, setShortBy] = useState("asc");
  const shortByAuthor = () => {
    setShortBy(shortBy === "asc" ? "desc" : "asc");
    if (shortBy === "asc") {
      books.sort((a, b) => (a.author > b.author ? 1 : -1));
    }
    if (shortBy === "desc") {
      books.sort((a, b) => (a.author < b.author ? 1 : -1));
    }
  };

  return (
    <div className="books" style={{ textAlign: "center" }}>
      <h2>Books</h2>

      <table className="table" style={{ width: "100%" }}>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th onClick={() => shortByAuthor()}>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th> Action</th>

          </tr>
        </thead>

        <tbody style={{ textAlign: "center" }}>
          {book.map((book) => (
            <BookRow 
            key={book.id}
            {...book}
            books={book}
            setBookParent={setBook}
              />
          ))}      
        </tbody>
      </table>
    </div>
  );
};

export default Books;
