import {Link, useParams} from "react-router-dom";

import NotFound from "./NotFound";
import {books} from "../App";
import Book from "../components/Book";

export default function Page() {
    const bookId = Number(useParams().id);
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
                {book.title}
            </h1>

            <Book book={book} isListItem={false} />
        </>
    );
}