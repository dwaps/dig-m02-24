import { useBook } from "../../hooks/useBook";
import { useLocation } from "react-router-dom";

const BookDetailsPage = () => {
  const { book } = useBook();
  const location = useLocation();
  const { id, title, author, year } = location.state;

  if (!id) {
    return <div>Une erreur est survenue...</div>;
  }

  return (
    <div className="book-details-page" style={{ textAlign: "left" }}>
      <a className="m-2 p-4 " onClick={() => window.history.back()}> Retour home  </a>
      <div className="book-details-page" style={{ textAlign: "center" }}>
        <h1>{title}</h1>
        <p>{author}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};
export default BookDetailsPage;
