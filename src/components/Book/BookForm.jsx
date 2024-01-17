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
    const {authors, createOrUpdateBook} = useContext(BookContext);
    const [book, setBook] = useState(_book);

    const handleChangeAuthor = event => {
        const authorIndex = Number(event.target.value);

        setBook(previousBook => ({
            ...previousBook,
            author: authors[authorIndex].id,
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

        createOrUpdateBook(book);

        navigate("/books");
    };

    return (
        <form className={styles.bookForm} onSubmit={handleSubmit}>
            <select defaultValue="" required onChange={handleChangeAuthor}>
                <option value="" disabled={true}>
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
                placeholder="Title *"
                maxLength={255}
                required
                onChange={handleChangeTitle}
            />

            <textarea
                placeholder="Summary *"
                defaultValue={book.summary}
                rows={6}
                required
                onChange={handleChangeSummary}
            />

            <div className={styles.bookForm__footer}>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}