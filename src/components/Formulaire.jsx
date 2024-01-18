/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { BookContext } from "../utils/context/books";
import { Link } from "react-router-dom";

export const Formulaire = () => {
  const { handleAddBook } = useContext(BookContext);

  return (
    <>
      <h1 className="text-center m-1">Formulaire d'ajout de livre</h1>
      <Link className="m-3" to="/Livres">
        Retour à la liste
      </Link>
      <form onSubmit={handleAddBook} className="m-1 p-2 border border-dark">
        <div className="form-group m-1 p-1">
          <label htmlFor="isbn">ISBN</label>
          <input
            type="text"
            className="form-control"
            id="isbn"
            name="isbn"
            aria-describedby="ISBNHelp"
            placeholder="Enter ISBN"
          />
        </div>
        <div className="form-group m-1 p-1">
          <label htmlFor="titre">Titre</label>
          <input
            type="text"
            className="form-control"
            id="titre"
            name="titre"
            aria-describedby="TitreHelp"
            placeholder="Enter Titre"
          />
        </div>
        <div className="form-group m-1 p-1">
          <label htmlFor="auteur">Auteur</label>
          <input
            type="text"
            className="form-control"
            id="auteur"
            name="auteur"
            aria-describedby="AuteurHelp"
            placeholder="Enter Auteur"
          />
        </div>
        <div className="form-group m-1 p-1">
          <label htmlFor="editeur">Editeur</label>
          <input
            type="text"
            className="form-control"
            id="editeur"
            name="editeur"
            aria-describedby="EditeurHelp"
            placeholder="Enter Editeur"
          />
        </div>
        <div className="form-group m-1 p-1">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            aria-label="With textarea"
            id="description"
            name="description"
            placeholder="Enter Description"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Ajouter
        </button>
      </form>
    </>
  );
};
