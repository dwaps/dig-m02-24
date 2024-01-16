import {StrictMode} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./index.module.scss";
import Header from "./components/Header";
import BookPage from "./pages/Book/Book";
import BooksPage from "./pages/Book/Books";
import ContactPage from "./pages/Contact";
import EditBookPage from "./pages/Book/EditBook";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";

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
                        <Route path="/books/:id/edit" element={<EditBookPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </StrictMode>
    );
}