import { bookList } from '../../index';
import { useState } from 'react';
import { createContext } from 'react';

export const BookListContext = createContext()

export default function BookListProvider({ children }) {
    const [bookListState, setBookList] = useState(bookList);

    function filterBooks(isAsc) {
      let bookListOrdered
      if (isAsc) {
        bookListOrdered = bookListState.toSorted(function (ca, cb) {
          return ca.profile.name.localeCompare(cb.profile.name)
        })
      } else {
        bookListOrdered = bookListState.toSorted(function (ca, cb) {
          return cb.profile.name.localeCompare(ca.profile.name)
        })
      }
      setBookList(bookListOrdered)
    }

    function deleteBook(bookToDelete){
        setBookList(bookListState.filter(book => bookToDelete.id !== book.id))
    }

    function createOrUpdate(newBook){
      if(newBook.id === undefined){
        //CREATE
        newBook.id = Math.max(...bookListState.map(book => book.id)) + 1
      } else {
        //update
        setBookList(bookListState.filter(book => newBook.id === book.id))
      }
      setBookList([ ...bookListState, newBook ])
    }

    return (
        <BookListContext.Provider value={{ bookListState, filterBooks, deleteBook, createOrUpdate }}>
            { children }
        </BookListContext.Provider>
    )
}