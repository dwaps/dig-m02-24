import "./BookCreate.css";

import { Link } from "react-router-dom";
import { books } from "../../models/index";
import { useState } from "react";
import { BookContext } from "../../utils/context";
import { useContext } from "react";

function BookCreate() {
  const { addBook } = useContext(BookContext);

  const [valueNom, setValueNom] = useState("");
  const [valueAuteur, setValueAuteur] = useState("");
  const [valuePrix, setValuePrix] = useState(0);
  const [valueDescription, setValueDescription] = useState("");

  const handleChangeNom = (e) => {
    setValueNom(e.target.value);
  };
  const handleChangeAuteur = (e) => {
    setValueAuteur(e.target.value);
  };
  const handleChangePrix = (e) => {
    setValuePrix(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setValueDescription(e.target.value);
  };

  const commitValuesBook = (newNom, newAuteur, newPrix, newDescription) => {
    setValueNom(newNom);
    setValueAuteur(newAuteur);
    setValuePrix(newPrix);
    setValueDescription(newDescription);

    const newBook = {
      id: "00" + (books.length + 1),
      name: newNom,
      auteur: newAuteur,
      price: newPrix,
      description: newDescription,
      photo:
        "https://images.unsplash.com/photo-1527176930608-09cb256ab504?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };

    console.log(newBook);

    addBook(newBook);
  };

  return (
    <div className="form-create">
      <h2>Nouveau livre</h2>
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
          <label htmlFor="price">Prix du livre : </label>
          <input
            id="price"
            name="price"
            type="number"
            step="0.01"
            value={valuePrix}
            onChange={handleChangePrix}
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
                commitValuesBook(
                  valueNom,
                  valueAuteur,
                  parseFloat(valuePrix),
                  valueDescription
                )
              }
            >
              Créer
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

export default BookCreate;
