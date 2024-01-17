import { Navigate, useParams, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import BookForm from '../components/BookForm/BookForm'
import { BookListContext } from '../models/utils/context/index';

function UpadateBookPage() {

	// const navigate = useNavigate()
	
	const { bookListState, createOrUpdate } = useContext(BookListContext)
	const id = Number(useParams().id)
	
	const [book, setBook] = useState(bookListState[0]);

	let title = useRef(bookListState[id].title)
	let summary = useRef(bookListState[id].summary)
	let publisher = useRef(bookListState[id].data.publisher)
	let releaseDate = useRef(bookListState[id].data.releaseDate)
	let name = useRef(bookListState[id].profile.name)
	let bio = useRef(bookListState[id].profile.bio)
	
	let bookCopy 


	function handleSubmit(event){

		event.preventDefault()
		
		book.title = title.current.value
		book.summary = summary.current.value
		book.data.publisher = publisher.current.value
		book.data.releaseDate = releaseDate.current.value
		book.profile.name = name.current.value
		book.profile.bio = bio.current.value

		createOrUpdate(book)
	}

	return (
		<div className="create-book-page">
			<BookForm book={book} />
		</div>
	)

}

export default UpadateBookPage;
