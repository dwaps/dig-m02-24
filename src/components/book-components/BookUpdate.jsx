import "./BookUpdate.css";

import { Link, useParams } from "react-router-dom";
import { books } from "../../models/index";
import { useState } from "react";
import { BookContext } from "../../utils/context";
import { useContext } from "react";

function BookUpdate() {
  const { updBook } = useContext(BookContext);
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  const [valueNom, setValueNom] = useState(book ? book.name : "");
  const [valueAuteur, setValueAuteur] = useState(book ? book.auteur : "");
  const [valueDescription, setValueDescription] = useState(
    book ? book.description : ""
  );

  const handleChangeNom = (e) => {
    setValueNom(e.target.value);
  };
  const handleChangeAuteur = (e) => {
    setValueAuteur(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setValueDescription(e.target.value);
  };

  const commitValuesBook = (newNom, newAuteur, newDescription) => {
    setValueNom(newNom);
    setValueAuteur(newAuteur);
    setValueDescription(newDescription);

    book.name = newNom;
    book.auteur = newAuteur;
    book.description = newDescription;

    updBook(book);
  };

  return (
    <div className="form-update">
      <h2>Mise à jour du livre ID {book.id}</h2>
      <img src={book.photo} alt={"Livre " + book.id} />
      <div className="form-content">
        <div className="form-field">
          <label htmlFor="nom">Nom du livre : </label>
          <input
            id="nom"
            name="nom"
            type="text"
            value={valueNom}
            onChange={handleChangeNom}
          />
        </div>
        <div className="form-field">
          <label htmlFor="auteur">Nom de l'auteur : </label>
          <input
            id="auteur"
            name="auteur"
            type="text"
            value={valueAuteur}
            onChange={handleChangeAuteur}
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description du livre : </label>
          <textarea
            id="description"
            name="description"
            type="textarea"
            value={valueDescription}
            onChange={handleChangeDescription}
          />
        </div>
        <div className="form-actions">
          <Link to="/">
            <button
              onClick={() =>
                commitValuesBook(valueNom, valueAuteur, valueDescription)
              }
            >
              Update
            </button>
          </Link>
          <Link to="/">
            <button>Annuler</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookUpdate;
