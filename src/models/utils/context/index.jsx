import { bookList } from '../../index';
import { useState } from 'react';
import { createContext } from 'react';

export const BookListContext = createContext()

export default function BookListProvider({ children }) {
	const [bookListState, setBookList] = useState(bookList);
	const [bookListStateCopy, setBookListStateCopy] = useState(bookListState)

	function setListStateAndListStateCopy(val1, val2) {
		setBookList(val1)
		setBookListStateCopy(val2)
	}

	function filterBooks(asc) {
		let bookListOrdered, bookListCopyOrdered
		if (asc) {
			bookListOrdered = bookListState.toSorted(
				(firstElt, secondElt) => firstElt.profile.name.localeCompare(secondElt.profile.name)
			)
			bookListCopyOrdered = bookListStateCopy.toSorted(
				(firstElt, secondElt) => firstElt.profile.name.localeCompare(secondElt.profile.name)
			)
		} else {
			bookListOrdered = bookListState.toSorted(
				(firstElt, secondElt) => secondElt.profile.name.localeCompare(firstElt.profile.name)
			)
			bookListCopyOrdered = bookListStateCopy.toSorted(
				(firstElt, secondElt) => secondElt.profile.name.localeCompare(firstElt.profile.name)
			)
		}

		setListStateAndListStateCopy(bookListOrdered, bookListCopyOrdered)
	}

	function deleteBook(bookToDelete) {
		setListStateAndListStateCopy(
			bookListState.filter(book => bookToDelete.id !== book.id), 
			bookListStateCopy.filter(book => bookToDelete.id !== book.id)
		)
	}

	function createOrUpdate(newBook) {
		let tempList = bookListState
		if (!newBook.id) {
			newBook.id = Math.max(...bookListState.map(book => book.id)) + 1
			newBook.bookImg = `https://picsum.photos/id/${newBook.id}/200/200`
			newBook.profile.photo = `https://picsum.photos/id/${newBook.id * 10}/200/200`
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