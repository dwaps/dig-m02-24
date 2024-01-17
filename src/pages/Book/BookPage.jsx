import {Link, useParams} from "react-router-dom";
import {useContext} from "react";

import styles from "./BookPage.module.scss";
import NotFound from "../NotFoundPage";
import BookContext from "../../contexts/BookContext";

export default function BookPage() {
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

            <h1 className={styles.title}>
                {book.title}
            </h1>

            <p className={styles.author}>
                By

                <i className={styles.author__name}>
                    {book.author.firstName} {book.author.lastName}
                </i>
            </p>

            <p>
                {book.summary}
            </p>
        </>
    );
}