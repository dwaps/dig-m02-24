import styles from "./Book.module.css";
import Photo from "../Photo/Photo";
import { Link } from "react-router-dom";
import { BookListContext } from "../../utils/context";
import { useContext } from "react";

const Book = ({ book, isDetail }) => {
  const [ books, filterBooks, deleteBook ] = useContext(BookListContext);

  return (
    <div className={styles.Book}>
      <Photo photo={book.photo}></Photo>
      <Link to={`/livre/${book.id}`}>
        <h2 className={styles.BookTitle}>{book.title}</h2>
      </Link>
      <p>Auteur du livre : {book.autor}</p>
      <div className={isDetail ? styles.BookCTADetails : styles.BookCTA}>
        {isDetail ? (
          <>
            <p className={styles.BookSummary}>{book.summary}</p>
          </>
        ) :       
        ( <button className={styles.BookDelete}
          onClick={() => {
            deleteBook(book.id);
          }}
          >delete</button>)
        }
        <Link to={`/edit/${book.id}`}>
          <button className={styles.BookModif}>modifier</button>
        </Link>
      </div>
    </div>
  );
};

export default Book;
