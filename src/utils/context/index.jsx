import { books } from "./../../models/index";
import { useState } from 'react';
import { createContext } from 'react';

export const BookListContext = createContext()

export default function BookListProvider({ children }) {
    const [myBooks, setMyBooks] = useState(books);
    const [memoBooks, setMemoBooks] = useState(books);

    function filterBooks(isAsc) {
      let myBooksOrdered
      if (isAsc) {
        myBooksOrdered = myBooks.toSorted(function (ca, cb) {
          return ca.autor.localeCompare(cb.autor)
        })
      } else {
        myBooksOrdered = myBooks.toSorted(function (ca, cb) {
          return cb.autor.localeCompare(ca.autor)
        })
      }
      setMyBooks(myBooksOrdered)
      setMemoBooks(myBooks)
    }

    function deleteBook(id) {
        setMyBooks(myBooks.filter((b) => id !== b.id))
        setMemoBooks(memoBooks.filter((b) => id !== b.id))
    }

    function updateBook(monBook) {
        let newBookList = myBooks.filter((book) => 
            book.id !== monBook.id
        )
        newBookList.push(monBook)   
        setMyBooks(newBookList)
        setMemoBooks(myBooks)
    }

    function addBook(monBook) {
        setMyBooks([...myBooks, monBook])
        setMemoBooks(myBooks)
    }

    function searchBook(inputValue) {
        const resultBooks = memoBooks.filter((book) => {
            return book.title.toLowerCase().includes(inputValue);
        })
        setMyBooks(resultBooks)
    }

    return <BookListContext.Provider value={ [ myBooks, filterBooks, deleteBook, updateBook, addBook, searchBook] }>{ children }</BookListContext.Provider>
}