import {useContext, useState} from "react";

import styles from "./BooksPage.module.scss";
import BookList from "../../components/Book/BookList";
import BookContext from "../../contexts/BookContext";

export default function BooksPage() {
    const books = filter(0);
    const [sortOrder, setSortOrder] = useState(0);

    const handleChangeSortOrder = event => {
        const order = Number(event.currentTarget.value);

        setSortOrder(previousOrder => {
            if (order !== previousOrder) {
                filter();
            }

            return order;
        });
    };

    return (
        <>
            <div className={styles.listHeader}>
                <h1>
                    Books
                </h1>

                <select onChange={handleChangeSortOrder}>
                    <option value={0} selected>
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

            <BookList books={books} />
        </>
    );
}

/**
 * @param {Number} sortOrder
 */
function filter(sortOrder) {
    const unfilteredBooks = useContext(BookContext);
    const filteredBooks = unfilteredBooks;

    return filteredBooks;
}