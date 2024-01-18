import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { BookContext } from "../utils/context/books";

export const DetailLivre = () => {
  const { isbn } = useParams();
  const { getBook } = useContext(BookContext);
  const book = getBook(isbn);

  return (
    <>
      <div className="card bg-light m-3">
        <div className="card-header">{book && book.title}</div>
        <div className="card-body">
          <h5 className="card-title">
            {book && book.author} | {book && book.publisher}
          </h5>
          <p className="card-text">{book && book.description}</p>
        </div>
      </div>
      <Link className="m-3" to="/Livres">
        Retour à la liste
      </Link>
    </>
  );
};
