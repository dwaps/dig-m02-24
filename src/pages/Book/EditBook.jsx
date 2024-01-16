import {Link, useParams} from "react-router-dom";
import {useContext} from "react";

import NotFound from "../NotFound";
import BookContext from "../../contexts/BookContext";

export default function Page() {
    const bookId = Number(useParams().id);
    const books = useContext(BookContext);
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
        </>
    );
}