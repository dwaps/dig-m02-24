import { createContext, useState } from "react";
import { smileys, books } from "../../models/index";

export const SmileyImageContext = createContext();

//Attention ! Ne pas utiliser, pas encore fonctionnel
export const SmileyImageProvider = ({ children }) => {
  const [smileyImage, setSmileyImage] = useState("");

  function getSmileyImage(id) {
    const current = smileys.find((sm) => sm.id === id);
    setSmileyImage(current.image);
  }

  return (
    <SmileyImageContext.Provider
      value={{ smileyImage, getSmileyImage: getSmileyImage }}
    >
      {children}
    </SmileyImageContext.Provider>
  );
};

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [tabOfBooks, setTabOfBooks] = useState(books);

  function trierTableauAsc() {
    setTabOfBooks(
      [...tabOfBooks].sort((a, b) => a.auteur.localeCompare(b.auteur))
    );
  }

  function trierTableauDesc() {
    setTabOfBooks(
      [...tabOfBooks].sort((a, b) => b.auteur.localeCompare(a.auteur))
    );
  }

  function updateBook(oldBook) {
    const newBook = tabOfBooks.find((b) => b.id === oldBook.id);
    newBook.name = oldBook.name;
    newBook.description = oldBook.description;
    newBook.auteur = oldBook.auteur;
    newBook.price = oldBook.price;
    setTabOfBooks(
      [...tabOfBooks].map((b) => (b.id === newBook.id ? newBook : b))
    );
  }

  function addBook(book) {
    const newTab = [];
    tabOfBooks.forEach((b) => newTab.push(b));
    newTab.push(book);
    setTabOfBooks(newTab);
  }

  function deleteFromTableau(book) {
    const newTab = [];
    tabOfBooks.forEach((b) => {
      if (b.id !== book.id) {
        newTab.push(b);
      }
    });
    setTabOfBooks(newTab);
  }

  return (
    <BookContext.Provider
      value={{
        tabOfBooks,
        triTableauAsc: trierTableauAsc,
        triTableauDesc: trierTableauDesc,
        delFromTab: deleteFromTableau,
        updBook: updateBook,
        addBook: addBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
