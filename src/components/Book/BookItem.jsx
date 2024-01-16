import {Link} from "react-router-dom";

import styles from "./BookItem.module.scss";

/**
 * @param {Object} props
 * @param {import("../../contexts/BookContext.jsx").Book} props.book
 * @param {Function} props.onDelete
 */
export default function BookItem({book, onDelete}) {
    return (
        <li className={styles.bookItem}>
            <div className={styles.bookItem__header}>
                <h2 className={styles.bookItem__header__title}>
                    <Link to={`/books/${book.id}`}>
                        {book.title}

                        <small className={styles.bookItem__header__title__id}>
                            #{book.id}
                        </small>
                    </Link>
                </h2>

                <div className={styles.bookItem__header__links}>
                    <Link to={`/books/${book.id}/edit`}>
                        Edit
                    </Link>

                    <span to={`/books/${book.id}/delete`} className={styles.link__delete}>
                        Delete
                    </span>
                </div>
            </div>

            <p className={styles.bookItem__author}>
                By

                <i className={styles.bookItem__author__name}>
                    {book.author.firstName} {book.author.lastName}
                </i>
            </p>

            <p className={styles.bookItem__summary}>
                {book.summary}
            </p>
        </li>
    );
}