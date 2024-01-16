import {Link} from "react-router-dom";

import styles from "./Book.module.scss";

/**
 * @param {Object} props
 * @param {import("../App").Book} props.book
 * @param {Boolean} props.isListItem
 */
export default function Book({book, isListItem}) {
    return (
        <li className={styles.book}>
            {isListItem && (
                <h2 className={styles.book__title}>
                    <Link to={`/books/${book.id}`}>
                        {book.title}

                        <small className={styles.book__title__id}>
                            #{book.id}
                        </small>
                    </Link>
                </h2>
            )}

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