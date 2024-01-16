import { createContext } from "react";
import { books } from "../../../models";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  return (
    <BooksContext.Provider value={{ books }}>{children}</BooksContext.Provider>
  );
};
