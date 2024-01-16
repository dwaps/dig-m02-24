import {useContext} from "react";

import BookList from "../../components/Book/BookList";
import BookContext from "../../contexts/BookContext";

export default function Page() {
    const books = useContext(BookContext);

    return (
        <>
            <h1>
                Books
            </h1>

            <BookList books={books} />
        </>
    );
}