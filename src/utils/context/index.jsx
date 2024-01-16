import { createContext, useState } from "react";
import { library } from "../data/library";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(library);

  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  );
};
