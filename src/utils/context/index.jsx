import { useState } from 'react';
import { createContext } from 'react';
import { useFetchData } from '../hooks';
import { useEffect } from 'react';

export const BookListContext = createContext()

export default function BookListProvider({ children }) {
    const { data } = useFetchData("http://localhost:3000/books");
    const [myBooks, setMyBooks] = useState([]);
    const [memoBooks, setMemoBooks] = useState([]);

    useEffect(() => {
      setMyBooks(data)
      setMemoBooks(data)
    }, [data]);

    function filterBooks(isAsc) {
      let myBooksOrdered
      let myMemoBooks
      if (isAsc) {
        myBooksOrdered = myBooks.toSorted(function (ca, cb) {
          return ca.autor.localeCompare(cb.autor)
        })
        myMemoBooks = memoBooks.toSorted(function (ca, cb) {
          return ca.autor.localeCompare(cb.autor)
        })
      } else {
        myBooksOrdered = myBooks.toSorted(function (ca, cb) {
          return cb.autor.localeCompare(ca.autor)
        })
        myMemoBooks = memoBooks.toSorted(function (ca, cb) {
            return cb.autor.localeCompare(ca.autor)
        })
      }
      setMyBooks(myBooksOrdered)
      setMemoBooks(myMemoBooks)
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