import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

import styles from "./BookForm.module.scss";
import BookContext from "../../contexts/BookContext";

/**
 * @param {Object} props
 * @param {Book} props.book
 */
export default function BookForm({book: _book}) {
    const navigate = useNavigate();
    const {authors, createBook} = useContext(BookContext);
    const [book, setBook] = useState(_book);

    const handleChangeAuthor = event => {
        const authorId = Number(event.target.value);

        setBook(previousBook => ({
            ...previousBook,
            author: authors[authorId] ?? null,
        }));
    };

    const handleChangeTitle = event => {
        const title = event.target.value;

        setBook(previousBook => ({
            ...previousBook,
            title,
        }));
    };

    const handleChangeSummary = event => {
        const summary = event.target.value;

        setBook(previousBook => ({
            ...previousBook,
            summary,
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();

        createBook(book);

        navigate("/books");
    };

    return (
        <form className={styles.bookForm} onSubmit={handleSubmit}>
            <select defaultValue={null} onChange={handleChangeAuthor}>
                <option value={null}>
                    Select an author
                </option>

                {authors.map((author, index) => (
                    <option key={index} value={index}>
                        {author.firstName} {author.lastName}
                    </option>
                ))}
            </select>

            <input
                type="text"
                value={book.title}
                placeholder="Name"
                maxLength={255}
                required
                onChange={handleChangeTitle}
            />

            <textarea
                placeholder="Summary"
                defaultValue={book.summary}
                required
                onChange={handleChangeSummary}
            />

            <button type="submit">
                Submit
            </button>
        </form>
    );
}