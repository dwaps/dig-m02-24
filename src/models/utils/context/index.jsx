import { bookList } from '../../index';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { useFetchData } from '../hooks';


export const BookListContext = createContext()

export default function BookListProvider({ children }) {
	
	const { data } = useFetchData("http://localhost:3000/books")

	const [bookListState, setBookList] = useState([]);
	const [bookListStateCopy, setBookListStateCopy] = useState([])

	
	useEffect(() => {
		setBookList(data)
		setBookListStateCopy(data)
	}, [data])

	function setListStateAndListStateCopy(val1, val2) {
		setBookList(val1)
		setBookListStateCopy(val2)
	}

	function filterBooks(ord) {
		setListStateAndListStateCopy(
			bookListState.toSorted(
				(firstElt, secondElt) => firstElt.profile.name.localeCompare(secondElt.profile.name) * ord
			),
			bookListStateCopy.toSorted(
				(firstElt, secondElt) => firstElt.profile.name.localeCompare(secondElt.profile.name) * ord
			)
		)
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
		setBookList(
			bookListStateCopy.filter(
				book => book.title.toLowerCase().includes(searchWord.current.value)
			)
		)
	}

	return (
		<BookListContext.Provider value={{ bookListState, filterBooks, deleteBook, createOrUpdate, searchBookList }}>
			{children}
		</BookListContext.Provider>
	)
}