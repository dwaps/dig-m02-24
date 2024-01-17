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

  function filterBooksByName(text) {
    if (text !== "") {
      setTabOfBooks(
        [...tabOfBooks].filter((b) =>
          b.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setTabOfBooks(books);
    }
  }

  function updateBook(oldBook) {
    const newBook = tabOfBooks.find((b) => b.id === oldBook.id);
    newBook.name = oldBook.name;
    newBook.description = oldBook.description;
    newBook.auteur = oldBook.auteur;
    newBook.price = oldBook.price;
    console.log(newBook);
    setTabOfBooks(
      [...tabOfBooks].map((b) => (b.id === newBook.id ? newBook : b))
    );
  }

  function addBook(book) {
    tabOfBooks.push(book);
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
        filterByName: filterBooksByName,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
