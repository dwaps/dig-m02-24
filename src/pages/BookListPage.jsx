import { useContext } from "react";
import { Link } from "react-router-dom";
import BookList from "../components/BookList/BookList";
import { BookListContext } from './../models/utils/context/index';


function BookListPage() {

	const bookList = useContext(BookListContext)

	return (
		<>
			<div className="book-list-page">
				<h1>Book list:</h1>
				<div className="book-list-manager">
					<div className="book-list-manager-sorter">
						Sort by author:
						<span>
							<button onClick={()=> {
								bookList.handleSortAsc()
							}}>ASC</button>
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
