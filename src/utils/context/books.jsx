import { createContext, useState } from "react";
import { library } from "../data/library";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(library);

  books.sort((a, b) => {
    const authorA = a.author.toLowerCase();
    const authorB = b.author.toLowerCase();
    if (authorA > authorB) return 1;
    if (authorA < authorB) return -1;
    return 0;
  });

  const sortBookByAuthor = () => {
    console.log("ssdq");
    setBooks(books.toReversed());
  };

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
      value={{
        books,
        deleteBook,
        toggleEdit,
        endEdit,
        save,
        getBook,
        sortBookByAuthor,
        setBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
