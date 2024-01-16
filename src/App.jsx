import {StrictMode} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./index.module.scss";

import Header from "./components/Header";
import BookPage from "./pages/Book";
import BooksPage from "./pages/Books";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";

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
export const authors = [
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
export const books = [
    {
        id: 1,
        author: authors[0],
        title: "Book A",
        summary: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    }, {
        id: 2,
        author: authors[1],
        title: "Book B",
        summary: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    }, {
        id: 3,
        author: authors[0],
        title: "Book C",
        summary: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    },
];

export default function App() {
    return (
        <StrictMode>
            <BrowserRouter>
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/books" element={<BooksPage />} />
                        <Route path="/books/:id" element={<BookPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </StrictMode>
    );
}