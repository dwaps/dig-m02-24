import { createContext, useContext, useState } from "react";
import { books } from "../../../models";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [booksList, setBooksList] = useState(books);
  const [sortList, setSortedBooks] = useState(null);

  const setBooks = (newList) => {
    setBooksList(newList);
  };

  const sortBooks = () => {
    const newList = [...booksList];
    newList.sort((a, b) =>
      sortList === "asc"
        ? a.author.localeCompare(b.author)
        : b.author.localeCompare(a.author)
    );
    setBooksList(newList);
    setSortedBooks(sortList === "asc" ? "desc" : "asc");
  };

  const addBook = (newBook) => {
    setBooksList((booksList) => [...booksList, newBook]);
  };

  const deleteBook = (bookId) => {
    const newList = booksList.filter((book) => book.id !== bookId);
    setBooksList(newList);
  };

  const updateBook = (updatedBook) => {
    const newList = booksList.map((book) =>
      book.title === updatedBook.title ? updatedBook : book
    );
    setBooksList(newList);
  };

  return (
    <BooksContext.Provider
      value={{
        booksList,
        setBooks,
        deleteBook,
        addBook,
        updateBook,
        sortBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks n'est pas utilisé dans son provider");
  }
  return context;
};
