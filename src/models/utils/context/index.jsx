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
        console.log('bookTodelete:', bookToDelete)
        console.log('bookListState:', bookListState)
        setBookList(bookListState.filter(book => bookToDelete.id !== book.id))
        console.log("bookListState after update: ", bookListState)
    }


    return (
        <BookListContext.Provider value={[ bookListState, filterBooks, deleteBook ]}>
            { children }
        </BookListContext.Provider>
    )
}