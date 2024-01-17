import React from "react";
import styles from "./BookPage.module.css";
import Book from "./../../components/Book/Book";
import { useContext, useEffect } from "react";
import { BookListContext } from "./../../utils/context/index";
import { Link } from 'react-router-dom';
import SearchBar from "../../components/SearchBar/SearchBar";

const BookPage = () => {
  const [ books, filterBooks,,,, searchBook ] = useContext(BookListContext);

  return (
    <>
      <h1>MA LISTE DE LIVRE</h1>
      <div className={styles.BookPageHeader}>
        <SearchBar searchBook={searchBook}></SearchBar>
        <button onClick={() => {filterBooks(true)}}>Trier par nom d'auteur ascendant</button>
        <button onClick={() => {filterBooks(false)}}>Trier par nom d'auteur descendant</button>
        <Link to={`/create`}>Ajouter un livre</Link>
      </div>
      <div className={styles.BookPage}>
        { 
          books.map((book) => {
            return <Book key={book.id} book={book}></Book>;
          })
        }
      </div>
    </>
  );
};

export default BookPage;
