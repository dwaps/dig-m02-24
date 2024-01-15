import styles from "./BookList.module.scss";
import Book from "./Book";

/**
 * @param {Object} props
 * @param {import("../App.jsx").Book[]} props.books
 */
export default function BookList({books}) {
    return (
        <ul className={styles.bookList}>
            {books.map((book, index) => (
                <Book key={index} book={book} />
            ))}
        </ul>
    );
}