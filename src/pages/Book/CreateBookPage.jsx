import {Link} from "react-router-dom";

import BookForm from "../../components/Book/BookForm";

export default function CreateBookPage() {
    /**
     * @type {import("../../contexts/BookContext").Book}
     */
    const book = {
        id: null,
        author: null,
        title: "",
        summary: "",
    };

    return (
        <>
            <Link to="/books">
                &#8592; Books
            </Link>

            <h1>
                New book
            </h1>

            <BookForm book={book} />
        </>
    );
}