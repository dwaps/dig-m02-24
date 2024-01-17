import { useContext } from "react";
import { BookContext } from "../utils/context/books";
import "./Livres.css";
import { Link } from "react-router-dom";

export const Livres = () => {
  const { books, deleteBook, toggleEdit, endEdit, save, setBooks } =
    useContext(BookContext);

  const sortBookByAuthor = () => {
    console.log("é");
    setBooks(books.slice().reverse());
  };

  return (
    <div>
      <h1 className="text-center m-1">Livres</h1>
      <div className="d-flex">
        <button
          onClick={console.log}
          type="button"
          className="m-1 btn btn-outline-dark"
        >
          Ajouter
        </button>
        <input
          className="m-1 form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
      </div>
      <table className="m-1 table table-hover table-light table-bordered">
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">
              <span>Auteur</span>
              <button onClick={sortBookByAuthor} className="mx-1">
                ⬆
              </button>
              <button onClick={sortBookByAuthor} className="mx-1">
                ⬇
              </button>
            </th>
            <th scope="col">Editeur</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.isbn}>
              {b.editable && b.editable == true ? (
                <>
                  <td>
                    <input
                      id={b.isbn + "title"}
                      className="w-100"
                      type="text"
                      autoFocus
                      defaultValue={b.title}
                    />
                  </td>
                  <td>
                    <input
                      id={b.isbn + "author"}
                      className="w-100"
                      type="text"
                      autoFocus
                      defaultValue={b.author}
                    />
                  </td>
                  <td>
                    <input
                      id={b.isbn + "publisher"}
                      className="w-100"
                      type="text"
                      autoFocus
                      defaultValue={b.publisher}
                    />
                  </td>
                </>
              ) : (
                <>
                  <td>
                    <Link to={`/Livres/${b.isbn}`}>{b.title}</Link>
                  </td>
                  <td>{b.author}</td>
                  <td>{b.publisher}</td>
                </>
              )}
              <td>
                {b.editable && b.editable == true ? (
                  <button
                    onClick={() => {
                      save(b.isbn);
                      endEdit(b.isbn);
                    }}
                    type="button"
                    className="m-1 btn btn-outline-success"
                  >
                    Sauver
                  </button>
                ) : (
                  <button
                    onClick={() => toggleEdit(b.isbn)}
                    type="button"
                    className="m-1 btn btn-outline-warning"
                  >
                    Editer
                  </button>
                )}

                {b.editable && b.editable == true ? (
                  <button
                    onClick={() => {
                      endEdit(b.isbn);
                    }}
                    type="button"
                    className="m-1 btn btn-outline-danger"
                  >
                    Annuler
                  </button>
                ) : (
                  <button
                    onClick={() => deleteBook(b.isbn)}
                    type="button"
                    className="m-1 btn btn-outline-danger"
                  >
                    Supprimer
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
