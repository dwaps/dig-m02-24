import { createContext, useState } from "react";
import { library } from "../data/library";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(library);

  const deleteBook = (isbn) => {
    setBooks(books.filter((b) => b.isbn !== isbn));
  };

  const toggleEdit = (isbn) => {
    setBooks(books.map((b) => (b.isbn == isbn ? { ...b, editable: true } : b)));
  };

  const endEdit = (isbn) => {
    setBooks(
      books.map((b) => (b.isbn == isbn ? { ...b, editable: false } : b))
    );
  };

  const save = (isbn) => {
    const titre = document.getElementById(`${isbn + "title"}`).value;
    const auteur = document.getElementById(`${isbn + "author"}`).value;
    const editeur = document.getElementById(`${isbn + "publisher"}`).value;
    if (titre && auteur && editeur) {
      setBooks(
        books.map((b) => {
          if (b.isbn == isbn) {
            const newBook = b;
            newBook.title = titre;
            newBook.author = auteur;
            newBook.publisher = editeur;
            return newBook;
          } else {
            return b;
          }
        })
      );
    }
  };

  const getBook = (isbn) => {
    return books.find((b) => b.isbn == isbn);
  };

  return (
    <BookContext.Provider
      value={{ books, deleteBook, toggleEdit, endEdit, save, getBook }}
    >
      {children}
    </BookContext.Provider>
  );
};
