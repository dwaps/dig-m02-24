import { useParams } from "react-router-dom";
import { useContext, useRef, useState } from "react";

import { BookListContext } from '../models/utils/context/index';


function BookFormPage() {
	const id = Number(useParams().id)
	// if(id !== )

	const { bookListState, addBook } = useContext(BookListContext)

	const [book, setBook] = useState(bookListState[0]);


	const title = useRef(bookListState[0].title)
	const summary = useRef(bookListState[0].summary)
	const publisher = useRef(bookListState[0].data.publisher)
	const releaseDate = useRef(bookListState[0].data.releaseDate)
	const name = useRef(bookListState[0].profile.name)
	const bio = useRef(bookListState[0].profile.bio)

	function handleSubmit(event){
		event.preventDefault()
		book.title = title.current.value
		book.summary = summary.current.value
		book.data.publisher = publisher.current.value
		book.data.releaseDate = releaseDate.current.value
		book.profile.name = name.current.value
		book.profile.bio = bio.current.value

		console.log(book)

		// addBook(book)
	}

	return (
		<form className="create-book">
			<div>
				<label htmlFor="title">Title:</label>
				<input defaultValue={title.current} ref={title} id="title" name="title" type="text" />
			</div>

			<div>
				<label htmlFor="summary">Summary:</label>
				<input defaultValue={summary.current} ref={summary} id="summary" name="summary" type="text" />
			</div>

			<div>
				<label htmlFor="publisher">Publisher:</label>
				<input defaultValue={publisher.current} ref={publisher} id="publisher" name="publisher" type="text" />
			</div>

			<div>
				<label htmlFor="releaseDate">Release date:</label>
				<input defaultValue={releaseDate.current} ref={releaseDate} id="releaseDate" name="releaseDate" type="text" />
			</div>

			<div>
				<label htmlFor="name">Name:</label>
				<input defaultValue={name.current} ref={name} id="name" name="name" type="text" />
			</div>

			<div>
				<label htmlFor="bio">Bio:</label>
				<input defaultValue={bio.current} ref={bio} id="bio" name="bio" type="text" />
			</div>

			<button onClick={() => {handleSubmit(event)}} type="submit">Envoyer</button>

		</form>
	)

}

export default BookFormPage;
