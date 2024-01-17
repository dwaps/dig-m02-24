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
          return ca.autor.localeCompare(cb.autor)
        })
      } else {
        bookListOrdered = bookListState.toSorted(function (ca, cb) {
          return cb.autor.localeCompare(ca.autor)
        })
      }
      setBookList(bookListOrdered)
    }

    return (
        <BookListContext.Provider value={[ bookListState, filterBooks ]}>
            { children }
        </BookListContext.Provider>
    )
}