import "./BooksPage.css";

import Book from "./Book";

import { Link } from "react-router-dom";
import { BookContext } from "../../utils/context";
import { useContext } from "react";
import { useState } from "react";

function BooksPage() {
  const { tabOfBooks, triTableauAsc, triTableauDesc, filterByName } =
    useContext(BookContext);
  const [valueSearch, setValueSearch] = useState("");
  const handleChangeSearch = (e) => {
    setValueSearch(e.target.value);
  };
  return (
    <div>
      <h1>Tableau de livres</h1>
      <div className="content-books">
        <div className="books-tab">
          <div className="header-book-tab">
            <Link to="/new-book">
              <button className="btn-new-book">+ Nouveau livre</button>
            </Link>
            <div className="header-book-tab-search">
              <input
                type="text"
                value={valueSearch}
                onChange={handleChangeSearch}
              />
              <button onClick={() => filterByName(valueSearch)}>
                Recherche par nom
              </button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>
                  <div className="author-title">
                    <span>Auteur</span>
                    <div>
                      <button onClick={() => triTableauAsc()}>↓</button>
                      <button onClick={() => triTableauDesc()}>↑</button>
                    </div>
                  </div>
                </th>
                <th>Informations</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tabOfBooks.map((book) => (
                <Book key={book.id} book={book} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BooksPage;
