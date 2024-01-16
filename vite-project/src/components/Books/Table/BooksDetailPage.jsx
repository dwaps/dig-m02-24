import { useParams } from "react-router-dom";

const BookDetailsPage = ({ allBooks }) => {
  const { id } = useParams();
  const bookId = parseInt(id, 10);
  const bookDetails = allBooks.find((book) => book.id === bookId);
  return (
    <div>
      <h2>Details du livre :</h2>
      {bookDetails && (
        <>
          <h3>{bookDetails.title}</h3>
          <p>Auteur : {bookDetails.author}</p>
          <p style={{ color: bookDetails.stars > 5 ? "green" : "orange" }}>
            Note : {bookDetails.stars}
          </p>
          <p>Prix : {bookDetails.price}</p>
        </>
      )}
    </div>
  );
};

export default BookDetailsPage;
