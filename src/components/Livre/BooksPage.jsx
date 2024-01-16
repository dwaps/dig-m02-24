// BooksPage.jsx
import { useLivres } from "./LivresContext";
import { Link } from "react-router-dom";

function BooksPage() {
  const { livres, trierParAuteur } = useLivres();

  return (
    <div>
      <h2 className="p-4">Liste de Livres</h2>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th scope="col" onClick={trierParAuteur} style={{ cursor: "pointer" }}>
              Auteur
              </th>
            <th scope="col">Genre</th>
          </tr>
        </thead>
        <tbody>
          {livres.map((livre, index) => (
            <tr key={index}>
              <td>
                {/* Utilisez un lien pour rediriger vers la page de détails */}
                <Link to={`/livres/${livre.title}`}>{livre.title}</Link>
              </td>
              <td>{livre.author}</td>
              <td>{livre.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksPage;
