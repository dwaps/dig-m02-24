import "./BooksPage.css";

import Book from "./Book";

import { Link } from "react-router-dom";
import { BookContext } from "../../utils/context";
import { useContext } from "react";
import { useState } from "react";

function BooksPage() {
  const { tabOfBooks, triTableau, filterByName } = useContext(BookContext);
  const [isSortingAsc, setIsSortingAsc] = useState(false);
  const [charSorting, setCharSorting] = useState("↑");
  const [valueSearch, setValueSearch] = useState("");
  const handleChangeSearch = (e) => {
    setValueSearch(e.target.value);
  };
  const handleSorting = () => {
    console.log(isSortingAsc);
    triTableau(isSortingAsc);
    setIsSortingAsc(!isSortingAsc);
    if (charSorting === "↓") {
      setCharSorting("↑");
    } else {
      setCharSorting("↓");
    }
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
                      <button onClick={() => handleSorting()}>
                        {charSorting}
                      </button>
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
