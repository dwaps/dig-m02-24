/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { BookContext } from "../utils/context/books";
import { Link } from "react-router-dom";

export const Livres = () => {
  const {
    books,
    deleteBook,
    toggleEdit,
    endEdit,
    save,
    sortBookByAuthorAsc,
    sortBookByAuthorDesc,
    search,
    handleSearch,
  } = useContext(BookContext);

  return (
    <div>
      <h1 className="text-center m-1">Livres</h1>
      <p className="m-2">
        <Link to={"/Formulaire"}>Formulaire d'ajout de livre</Link>
      </p>
      <input
        onChange={(e) => handleSearch(e.target.value.trim())}
        className="m-1 form-control"
        type="search"
        name="search"
        placeholder="Search"
        aria-label="Search"
        defaultValue={search}
      ></input>
      <div className="table-responsive-sm">
        <table className="m-1 table table-hover table-light table-bordered">
          <thead>
            <tr>
              <th scope="col" className="align-middle">
                Titre
              </th>
              <th
                scope="col"
                className="d-flex justify-content-between align-items-center"
              >
                <span className="align-middle">Auteur</span>
                <ul className="d-flex list-inline m-0">
                  <li>
                    <button
                      onClick={sortBookByAuthorAsc}
                      type="button"
                      className="mx-1 btn btn-sm btn-outline-dark"
                    >
                      ⬆
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={sortBookByAuthorDesc}
                      type="button"
                      className="mx-1 btn btn-sm btn-outline-dark"
                    >
                      ⬇
                    </button>
                  </li>
                </ul>
              </th>
              <th scope="col" className="align-middle">
                Editeur
              </th>
              <th scope="col" className="align-middle">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {books
              .filter((b) => b.title.includes(search))
              .map((b) => (
                <tr key={b.isbn}>
                  {b.editable && b.editable == true ? (
                    <>
                      <td>
                        <input
                          id={b.isbn + "title"}
                          name={b.isbn + "title"}
                          className="w-100"
                          type="text"
                          autoFocus
                          defaultValue={b.title}
                        />
                      </td>
                      <td>
                        <input
                          id={b.isbn + "author"}
                          name={b.isbn + "author"}
                          className="w-100"
                          type="text"
                          autoFocus
                          defaultValue={b.author}
                        />
                      </td>
                      <td>
                        <input
                          id={b.isbn + "publisher"}
                          name={b.isbn + "publisher"}
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
                        className="m-1 btn btn-sm btn-outline-success"
                      >
                        Sauver
                      </button>
                    ) : (
                      <button
                        onClick={() => toggleEdit(b.isbn)}
                        type="button"
                        className="m-1 btn btn-sm btn-outline-warning"
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
                        className="m-1 btn btn-sm btn-outline-danger"
                      >
                        Annuler
                      </button>
                    ) : (
                      <button
                        onClick={() => deleteBook(b.isbn)}
                        type="button"
                        className="m-1 btn btn-sm btn-outline-danger"
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
    </div>
  );
};
