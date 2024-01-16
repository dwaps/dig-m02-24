import styles from "./BookList.module.scss";
import BookItem from "./BookItem.jsx";

/**
 * @param {Object} props
 * @param {import("../../contexts/BookContext.jsx").Book[]} props.books
 */
export default function BookList({books}) {
    const handleDeleteBook = () => {};

    return (
        <ul className={styles.bookTable}>
            {books.map((book, index) => (
                <BookItem key={index} book={book} onDelete={handleDeleteBook} />
            ))}
        </ul>
    );
}