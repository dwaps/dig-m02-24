import { createContext, useState, useEffect } from "react";
import { smileys, books } from "../../models/index";
import { useFetchData } from "../hooks";

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
  const listOfBooks = useFetchData("http://localhost:3000/books");
  useEffect(() => {
    setTabOfBooks(listOfBooks.sort((a, b) => a.auteur.localeCompare(b.auteur)));
  }, [listOfBooks]);
  const [tabOfBooks, setTabOfBooks] = useState([]);

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

  function trierTableau(isAsc) {
    if (isAsc) {
      setTabOfBooks(
        [...tabOfBooks].sort((a, b) => a.auteur.localeCompare(b.auteur))
      );
    } else {
      setTabOfBooks(
        [...tabOfBooks].sort((a, b) => b.auteur.localeCompare(a.auteur))
      );
    }
  }

  function filterBooksByName(text) {
    if (text !== "") {
      setTabOfBooks(
        [...listOfBooks].filter((b) =>
          b.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setTabOfBooks(listOfBooks);
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
        triTableau: trierTableau,
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
