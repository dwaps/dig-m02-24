// BooksPage.jsx
import { livres } from "../../models/Livre";

function BooksPage() {
  return (
    <div>
      <h2 className="p-4">Liste de Livres</h2>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Auteur</th>
            <th scope="col">Genre</th>
          </tr>
        </thead>
        <tbody>
          {livres.map((livre, index) => (
            <tr key={index}>
              <td>{livre.title}</td>
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
