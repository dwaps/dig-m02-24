import {useContext, useEffect, useState} from "react";

import styles from "./BooksPage.module.scss";
import BookList from "../../components/Book/BookList";
import BookContext from "../../contexts/BookContext";

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
                <h1>
                    Books
                </h1>

                <select className={styles.listHeader__select} defaultValue={0} onChange={handleChangeOrder}>
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
            </div>

            <BookList books={books} indices={indices} />
        </>
    );
}