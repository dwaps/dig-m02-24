import styles from "./BookList.module.scss";
import BookItem from "./BookItem";

/**
 * @param {Object} props
 * @param {import("../../contexts/BookContext").Book[]} props.books
 * @param {Number[]} props.indices
 */
export default function BookList({books, indices}) {
    return (
        <ul className={styles.bookTable}>
            {indices.map(index => (
                <BookItem
                    key={index}
                    index={index}
                    book={books[index]}
                />
            ))}
        </ul>
    );
}