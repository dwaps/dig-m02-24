import styles from "./BookList.module.scss";
import BookItem from "./BookItem.jsx";

/**
 * @param {Object} props
 * @param {import("../../contexts/BookContext").Book[]} props.books
 * @param {Number[]} props.indices
 * @param {(Number) => void} props.onDeleteBook
 */
export default function BookList({books, indices, onDeleteBook}) {
    return (
        <ul className={styles.bookTable}>
            {indices.map(index => (
                <BookItem
                    key={index}
                    index={index}
                    book={books[index]}
                    onDelete={onDeleteBook}
                />
            ))}
        </ul>
    );
}