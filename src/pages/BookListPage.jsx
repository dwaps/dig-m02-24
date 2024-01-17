import  '../components/BookList/BookList.css';
import { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Book from '../components/Book/Book'
import { BookListContext } from './../models/utils/context/index';


function BookListPage() {
	const {bookListState, filterBooks, deleteBook, searchBookList} = useContext(BookListContext)

	let searchWord = useRef('')

	function handleInputChange(){
		searchBookList(searchWord)
	}
	
	return (
		<>
			<div className="book-list-page">
				<h1>Book list:</h1>
				<div className="book-list-manager">
					<div className="book-list-manager-sorter">
						Sort by author:
						<span>
							<button onClick={()=> {
								filterBooks(true)
							}}>ASC</button>

							<button onClick={()=> {
								filterBooks(false)
							}}>DESC</button>
						</span>
					</div>

					<div className="book-list-manager-search">
						<label htmlFor="booktitle">Search for a book title:</label>
						<input id="booktitle" name="booktitle" defaultValue={searchWord.current} ref={searchWord} onChange={()=> handleInputChange()} type="text" />
					</div>

					<Link to={'/bookform'}>
						<button className="add-book">Ajouter un livre</button>
					</Link>
				</div>
				<div className="book-list">
					{bookListState.map(book => <Book key={book.id} book={book} onDeleteBook={deleteBook}/>)}
				</div>
			</div>
		</>
	)
};

export default BookListPage;
