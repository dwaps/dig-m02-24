import {
  //BrowserRouter as Router,
  //Routes,
  //Route,
  Link,
  //Navigate,
  //useParams,
} from "react-router-dom";

export const HeaderNav = () => (
  <nav className="navbar navbar-expand d-flex navbar-dark bg-dark justify-content-center">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/Accueil">
          Accueil
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Livres">
          Livres
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);
