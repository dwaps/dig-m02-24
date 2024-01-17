import {createContext, useState} from "react";

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
const _authors = [
    {
        id: 1,
        firstName: "Bob",
        lastName: "L'éponge",
    }, {
        id: 2,
        firstName: "John",
        lastName: "Doe",
    }, {
        id: 3,
        firstName: "Dean",
        lastName: "Takahashi",
    }, {
        id: 4,
        firstName: "Philippe",
        lastName: "Poutou",
    },
];

/**
 * @type {Book[]}
 */
const _books = [
    {
        id: 1,
        author: _authors[0],
        title: "Book A",
        summary: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    }, {
        id: 2,
        author: _authors[1],
        title: "Book B",
        summary: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    }, {
        id: 3,
        author: _authors[2],
        title: "Book C",
        summary: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    }, {
        id: 4,
        author: _authors[3],
        title: "Book D",
        summary: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    },
];

const BookContext = createContext(null);

export default BookContext;

/**
 * @param {React.ReactNode} children
 */
export function BookProvider({children}) {
    const authors = _authors;
    const [books, setBooks] = useState(_books);
    const [indices, setIndices] = useState(Array.from({length: books.length}, (_, i) => i));

    /**
     * @param {Number} order
     */
    const sortByAuthorName = order => setIndices(() => {
        if (order === 0) {
            // Reset the sort order
            return Array.from({length: books.length}, (_, i) => i);
        }

        return indices.toSorted((a, b) => {
            const firstBook = books[a];
            const secondBook = books[b];

            const firstAuthorName = `${firstBook.author.firstName} ${firstBook.author.lastName}`;
            const secondAuthorName = `${secondBook.author.firstName} ${secondBook.author.lastName}`;

            return firstAuthorName.localeCompare(secondAuthorName) * order;
        });
    });

    /**
     * @param {Book} book
     */
    const createBook = book => {
        book.id = (books.at(-1)?.id ?? 0) + 1;

        setIndices(Array.from({length: books.length + 1}, (_, i) => i));
        setBooks(previousBooks => [...previousBooks, book]);
    };

    /**
     * @param {Number} index
     */
    const deleteBook = index => {
        setIndices(Array.from({length: books.length - 1}, (_, i) => i));
        setBooks(books.toSpliced(index, 1));
    };

    return (
        <BookContext.Provider value={{authors, books, indices, createBook, deleteBook, sortByAuthorName}}>
            {children}
        </BookContext.Provider>
    );
}