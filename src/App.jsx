import styles from "./App.module.css";
import BookList from "./components/BookList";

/**
 * @typedef {Object} Book
 * @property {Number} id
 * @property {User} author
 * @property {String} title
 * @property {String} summary
 */

/**
 * @typedef {Object} User
 * @property {Number} id
 * @property {String} firstName
 * @property {String} lastName
 */

/**
 * @type {User[]}
 */
const authors = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
    }, {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
    },
];

/**
 * @type {Book[]}
 */
const books = [
    {
        id: 1,
        author: authors[0],
        title: "Book A",
        summary: "This is book A's description",
    }, {
        id: 2,
        author: authors[1],
        title: "Book B",
        summary: "This is book B's description",
    }, {
        id: 3,
        author: authors[0],
        title: "Book C",
        summary: "This is book C's description",
    },
];

export default function App() {
    return (
        <div className={styles.app}>
            <h1>
                Book list
            </h1>

            <BookList books={books} />
        </div>
    );
}