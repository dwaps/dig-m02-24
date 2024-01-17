import {Link} from "react-router-dom";

import styles from "./BookItem.module.scss";

/**
 * @param {Object} props
 * @param {Number} props.index
 * @param {import("../../contexts/BookContext").Book} props.book
 * @param {(Number) => void} props.onDelete
 */
export default function BookItem({index, book, onDelete}) {
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

                    <span to={`/books/${book.id}/delete`} className={styles.link__delete} onClick={() => onDelete(index)}>
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