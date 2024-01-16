import { useContext } from "react";
import { BookContext } from "../utils/context";

export const Livres = () => {
  const { books } = useContext(BookContext);

  return (
    <div>
      <h1 className="text-center m-1">Livres</h1>
      <button type="button" className="m-1 btn btn-outline-dark">
        Ajouter
      </button>
      <table className="m-1 table table-hover table-light table-bordered">
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Auteur</th>
            <th scope="col">Editeur</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.isbn}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.publisher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
