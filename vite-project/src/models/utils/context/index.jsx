import { createContext, useContext, useState } from "react";
import { useFetchData } from "./hooksBooks";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const { data: booksList, fetchData } = useFetchData(
    "http://localhost:3000/books"
  );
  const [sortList, setSortedBooks] = useState(null);

  const setBooks = () => {
    fetchData();
  };

  const sortBooks = () => {
    const newList = [...booksList];
    newList.sort((a, b) =>
      sortList === "asc"
        ? a.author.localeCompare(b.author)
        : b.author.localeCompare(a.author)
    );
    fetchData();
    setSortedBooks(sortList === "asc" ? "desc" : "asc");
  };

  const addBook = async (newBook) => {
    newBook.id = booksList[booksList.length - 1].id + 1;
    newBook.url =
      "https://i.pinimg.com/236x/37/a9/98/37a99839a447357ee6d3d4b9c991d864.jpg";
    const response = await fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });

    if (response.ok) {
      fetchData();
      console.log("adding OK");
    }
  };

  const deleteBook = async (bookId) => {
    const response = await fetch(`http://localhost:3000/books/${bookId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      fetchData();
      console.log("delete OK");
    }
  };

  const updateBook = async (updatedBook) => {
    const response = await fetch(
      `http://localhost:3000/books/${updatedBook.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBook),
      }
    );

    if (response.ok) {
      fetchData();
      console.log("UPDATE OK");
    }
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
