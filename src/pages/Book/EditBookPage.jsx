import {Link, useParams} from "react-router-dom";
import {useContext} from "react";

import NotFound from "../NotFoundPage";
import BookContext from "../../contexts/BookContext";
import BookForm from "../../components/Book/BookForm";

export default function EditBookPage() {
    const bookId = Number(useParams().id);
    const {books} = useContext(BookContext);
    const book = books.find(book => book.id === bookId);

    if (!book) {
        return (
            <NotFound />
        );
    }

    return (
        <>
            <Link to="/books">
                &#8592; Books
            </Link>

            <h1>
                Edit book
            </h1>

            <BookForm book={book} />
        </>
    );
}