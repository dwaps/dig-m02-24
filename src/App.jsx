import styles from "./App.module.css";
import BookList from "./components/BookList";
import SmileyBox from "./components/SmileyBox";

/**
 * @typedef {Object} Smiley
 * @property {String} id
 * @property {String} label
 * @property {String} image
 */

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
 * @type {Smiley[]}
 */
const smileys = [
    {
        id: "bbd6678b-efec-4804-b4af-c6dc2c5667dd",
        label: "Soleil",
        image: "☀️",
    }, {
        id: "99a8c826-f061-4a9d-96fd-37a23ddcde90",
        label: "Lune",
        image: "🌛",
    }, {
        id: "73f5b9a7-767d-412e-bd1c-25109a6a1fb5",
        label: "Nuage",
        image: "☁️",
    }, {
        id: "ba0be2a6-b952-4d4c-a9d0-ae1be99dc630",
        label: "Eclair",
        image: "⚡",
    },
];

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
                What is your humor?
            </h1>

            <SmileyBox smileys={smileys} />
        </div>
    );
}