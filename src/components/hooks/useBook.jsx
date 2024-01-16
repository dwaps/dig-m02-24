import { createContext, useContext, useState } from "react";

export const BookContext = createContext({
  book: null,
  setBook: () => {},
});

export function useBook() {
  const { book, setBook } = useContext(BookContext);
  return {
    book,
    setBook,
  };
}

export function BookContextProvider({ children }) {
  const [book, setBook] = useState(null);
  return (
    <BookContext.Provider
      value={{
        book,
        setBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
