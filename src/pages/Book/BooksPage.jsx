import {useContext, useState} from "react";

import styles from "./BooksPage.module.scss";
import BookList from "../../components/Book/BookList";
import BookContext from "../../contexts/BookContext";

export default function BooksPage() {
    const books = useContext(BookContext);
    const getUnsortedIndices = () => Array.from({length: books.length}, (_, i) => i);
    const [indices, setIndices] = useState(getUnsortedIndices());

    /**
     * @param {React.ChangeEvent<HTMLSelectElement>} event
     */
    const handleChangeOrder = event => {
        const order = Number(event.currentTarget.value);

        sortByAuthorName(order);
    };

    /**
     * @param {Number} index
     */
    const handleDeleteBook = index => {
        console.log(index);
    };

    /**
     * @param {Number} order
     */
    const sortByAuthorName = order => setIndices(indices => {
        if (order === 0) {
            // Reset the sort order
            return getUnsortedIndices();
        }

        return indices.toSorted((a, b) => {
            const firstBook = books[a];
            const secondBook = books[b];

            const firstAuthorName = `${firstBook.author.firstName} ${firstBook.author.lastName}`;
            const secondAuthorName = `${secondBook.author.firstName} ${secondBook.author.lastName}`;

            return firstAuthorName.localeCompare(secondAuthorName) * order;
        });
    });

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

            <BookList books={books} indices={indices} onDeleteBook={handleDeleteBook} />
        </>
    );
}