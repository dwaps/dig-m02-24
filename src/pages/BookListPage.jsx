import { useContext } from "react";

import { BookListContext } from './../App';

import BookList from "../components/BookList/BookList";
import { Link } from "react-router-dom";


function BookListPage() {

	const bookList = useContext(BookListContext)

	setTimeout(() => {
		bookList.filter(book => book.id === 2)
	}, 2500)

	// SEARCH COMPONENT
	// ADD BOOK
	// SORT ASC / DESC


	return (
		<>
			<div className="book-list-page">
				<h1>Book list:</h1>
				<div className="book-list-manager">
					<div className="book-list-manager-sorter">
						Sort by author:
						<span>
							<button>ASC</button>
							<button>DESC</button>
						</span>
					</div>

					<div className="book-list-manager-search">
						<label htmlFor="booktitle">Search for a book title:</label>
						<input id="booktitle" name="booktitle" type="text" />
					</div>

					<Link to={'/create-book'}>
						<button className="add-book">Ajouter un livre</button>
					</Link>
				</div>
				<BookList bookList={bookList} />
			</div>
		</>
	)
};

export default BookListPage;
