// BookDetailsPage.jsx
import { useNavigate, useParams } from "react-router-dom";
import { useLivres } from "./LivresContext";

function BookDetailsPage() {
    const { livres } = useLivres();
    const navigate = useNavigate();
    const { bookId } = useParams();
  
    // Recherche du livre par ID
    const book = livres.find((livre) => livre.title === bookId);
  
    if (!book) {
      return <div>Le livre n a pas été trouvé.</div>;
    }
  
    return (
      <div>
        <h2>Détails du Livre</h2>
        <h3>{book.title}</h3>
        <p>Auteur: {book.author}</p>
        <p>Genre: {book.genre}</p>
        {/* Ajoutez d'autres informations du livre au besoin */}
        <button onClick={() => navigate("/livres")}>Retour à la liste des livres</button>
      </div>
    );
  }

export default BookDetailsPage;
