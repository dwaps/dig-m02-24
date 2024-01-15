import styles from "./Book.module.scss";

/**
 * @param {Object} props
 * @param {import("../App.jsx").Book} props.book
 */
export default function Book({book}) {
    return (
        <li className={styles.book}>
            <h2 className={styles.book__title}>
                {book.title}

                <small className={styles.book__title__id}>
                    #{book.id}
                </small>
            </h2>

            <p className={styles.book__author}>
                By

                <i className={styles.book__author__name}>
                    {book.author.firstName} {book.author.lastName}
                </i>
            </p>

            <p className={styles.book__summary}>
                {book.summary}
            </p>
        </li>
    );
}