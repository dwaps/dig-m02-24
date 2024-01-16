import {books} from "../App";
import BookList from "../components/BookTable.jsx";

export default function Page() {
    return (
        <>
            <h1>
                Books
            </h1>

            <BookList books={books} />
        </>
    );
}