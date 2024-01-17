import {useContext, useEffect, useState} from "react";

import styles from "./BooksPage.module.scss";
import BookList from "../../components/Book/BookList";
import BookContext from "../../contexts/BookContext";
import {Link} from "react-router-dom";

export default function BooksPage() {
    const {books, indices, sortByAuthorName} = useContext(BookContext);

    /**
     * @param {React.ChangeEvent<HTMLSelectElement>} event
     */
    const handleChangeOrder = event => {
        const order = Number(event.currentTarget.value);

        sortByAuthorName(order);
    };

    return (
        <>
            <div className={styles.listHeader}>
                <h1 className={styles.listHeader__title}>
                    Books
                </h1>

                <div className={styles.listHeader__toolbar}>
                    <select defaultValue={0} onChange={handleChangeOrder}>
                        <option value={0}>
                            Sort by
                        </option>

                        <option value={1}>
                            Author name (A-Z)
                        </option>

                        <option value={-1}>
                            Author name (Z-A)
                        </option>
                    </select>

                    <Link to="/books/create">
                        <button>
                            New book
                        </button>
                    </Link>
                </div>
            </div>

            <BookList books={books} indices={indices}/>
        </>
    );
}