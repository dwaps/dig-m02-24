import { useParams } from "react-router-dom";
import { useContext } from "react";

import Book from "../components/Book/Book";
import { BookListContext } from './../models/utils/context/index';

import NotFound from "./NotFound";

function BookPage() {
	const id = Number(useParams().id)
	const { bookListState } = useContext(BookListContext)

	let book = bookListState.find(book => book.id == id)

	if (!book) {
		return (
			<NotFound />
		)
	} else {
		return (
			<Book book={book} />
		)
	}
}

export default BookPage;
