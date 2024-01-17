import { Navigate, useParams, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import BookForm from './../components/BookForm/BookForm'
import { BookListContext } from '../models/utils/context/index';

function CreateBookPage() {

	// const navigate = useNavigate()
	
	// const { bookListState, addBook, updateBook } = useContext(BookListContext)
	// const id = Number(useParams().id)
	
	// const [book, setBook] = useState(bookListState[0]);

	// let title = useRef('')
	// let summary = useRef('')
	// let publisher = useRef('')
	// let releaseDate = useRef('')
	// let name = useRef('')
	// let bio = useRef('')
	
	// let bookCopy 
	
	
	// if(!isNaN(id)){
	// 	console.log(id)
	// 	bookCopy = bookListState[id]

	// 	title = useRef(bookListState[id].title)
	// 	summary = useRef(bookListState[id].summary)
	// 	publisher = useRef(bookListState[id].data.publisher)
	// 	releaseDate = useRef(bookListState[id].data.releaseDate)
	// 	name = useRef(bookListState[id].profile.name)
	// 	bio = useRef(bookListState[id].profile.bio)
		
	// } 



	// function handleSubmit(event){

	// 	event.preventDefault()
		
	// 	book.title = title.current.value
	// 	book.summary = summary.current.value
	// 	book.data.publisher = publisher.current.value
	// 	book.data.releaseDate = releaseDate.current.value
	// 	book.profile.name = name.current.value
	// 	book.profile.bio = bio.current.value

	// 	if(id) updateBook(bookCopy, book)
	// 	else {
	// 		book.id = Math.max(...bookListState.map(book => book.id)) + 1
	// 		// addBook(book)
	// 		console.log(bookListState)
	// 		// debugger
	// 	}
	// }

	let book = {
		"title":null,
		"summary": null,
		"data": {
			"publisher": null,
			"releaseDate": null,
		},
		"profile": {
			"name": null,
			"bio": null,
		}
	}

	return (
		<div className="create-book-page">
			<BookForm book={book} />
		</div>
	)

}

export default CreateBookPage;
