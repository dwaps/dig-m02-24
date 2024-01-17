import { createContext, useState } from "react";
import { books as bks } from "../../models";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(bks);

  books.sort((a, b) => {
    const authorA = a.author.toLowerCase();
    const authorB = b.author.toLowerCase();
    if (authorA > authorB) return 1;
    if (authorA < authorB) return -1;
    return 0;
  });

  function getBook(id) {
    return books.find((b) => b.id === id);
  }

  function sortBooks() {
    setBooks(books.reverse());
  }

  return (
    <BooksContext.Provider value={{ books, getBook, sortBooks, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
