import { createContext } from "react";
import { books } from "../../models";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  function getBook(id) {
    return books.find((b) => b.id === id);
  }

  return (
    <BooksContext.Provider value={{ books, getBook }}>
      {children}
    </BooksContext.Provider>
  );
};
