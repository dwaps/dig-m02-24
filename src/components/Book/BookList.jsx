import styles from "./BookList.module.scss";
import BookItem from "./BookItem.jsx";

/**
 * @param {Object} props
 * @param {import("../../contexts/BookContext.jsx").Book[]} props.books
 * @param {Number[]} props.indices
 */
export default function BookList({books, indices}) {
    const handleDeleteBook = () => {};

    return (
        <ul className={styles.bookTable}>
            {indices.map(index => (
                <BookItem key={index} book={books[index]} onDelete={handleDeleteBook} />
            ))}
        </ul>
    );
}