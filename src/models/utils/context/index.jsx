import { bookList } from '../../index';
import { useState } from 'react';
import { createContext } from 'react';

export const BookListContext = createContext()

export default function BookListProvider({ children }) {
	const [bookListState, setBookList] = useState(bookList);
	const [bookListStateCopy, setBookListStateCopy] = useState(bookListState)


	function filterBooks(isAsc) {
		let bookListOrdered
		let bookListCopyOrdered
		if (isAsc) {
			bookListOrdered = bookListState.toSorted(function (first, second) {
				return first.profile.name.localeCompare(second.profile.name)
			})
			bookListCopyOrdered = bookListStateCopy.toSorted(function (first, second) {
				return first.profile.name.localeCompare(second.profile.name)
			})
		} else {
			bookListOrdered = bookListState.toSorted(function (first, second) {
				return second.profile.name.localeCompare(first.profile.name)
			})
			bookListCopyOrdered = bookListStateCopy.toSorted(function (first, second) {
				return second.profile.name.localeCompare(first.profile.name)
			})
		}
		setBookList(bookListOrdered)
		setBookListStateCopy(bookListCopyOrdered)
	}

	function deleteBook(bookToDelete) {
		setBookList(bookListState.filter(book => bookToDelete.id !== book.id))
		setBookListStateCopy(bookListStateCopy.filter(book => bookToDelete.id !== book.id))
	}

	function createOrUpdate(newBook) {
		let tempList = bookListState
		if (!newBook.id) {
			newBook.id = Math.max(...bookListState.map(book => book.id)) + 1
		} else {
			tempList = bookListState.filter(book => newBook.id !== book.id)
		}

		setBookList([...tempList, newBook])
	}

	function searchBookList(searchWord){
		setBookList(bookListStateCopy.filter(book => book.title.toLowerCase().includes(searchWord.current.value)))
	}

	return (
		<BookListContext.Provider value={{ bookListState, filterBooks, deleteBook, createOrUpdate, searchBookList }}>
			{children}
		</BookListContext.Provider>
	)
}