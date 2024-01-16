import styles from "./BookTable.module.scss";
import Book from "./Book";

/**
 * @param {Object} props
 * @param {import("../App").Book[]} props.books
 */
export default function BookTable({books}) {
    return (
        <ul className={styles.bookTable}>
            {books.map((book, index) => (
                <Book key={index} book={book} isListItem={true} />
            ))}
        </ul>
    );
}