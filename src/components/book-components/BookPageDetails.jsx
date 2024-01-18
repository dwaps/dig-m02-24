import "./Book.css";
import Photo from "./Photo";
import Price from "./Price";
import Auteur from "./Auteur";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../utils/hooks";
import { useEffect } from "react";

import { Link } from "react-router-dom";

function BookPageDetails() {
  const { id } = useParams();
  const book = useFetchData("http://localhost:3000/books/" + id);
  useEffect(() => {
    if (!book) {
      return <div>Book not found</div>;
    }
  }, [book]);

  return (
    <div>
      <h1>Détails du livre </h1>
      <div className="book-photo">
        <Photo key={book.id} photo={book.photo} />
      </div>
      <div className="book-auteur">
        <Auteur key={book.id} auteur={book.auteur} />
      </div>
      <div className="book-description">
        <h2>{book.name}</h2>
        <p>{book.description}</p>
      </div>
      <div className="book-price">
        <Price key={book.id} price={book.price} />
      </div>
      <Link to={"/"}>
        <button>Retour</button>
      </Link>
    </div>
  );
}

export default BookPageDetails;
