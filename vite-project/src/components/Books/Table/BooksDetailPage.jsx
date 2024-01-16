const BookDetailsPage = ({ match, allBooks }) => {
  const bookId = match.params.id;
  const bookDetails = allBooks.find((book) => book.id === bookId);

  return (
    <div>
      <h2>Details du livre</h2>
      {bookDetails && (
        <>
          <h3>{bookDetails.title}</h3>
          <p>Auteur : {bookDetails.author}</p>
          <p>Note : {bookDetails.rating}</p>
          <p>Prix : {bookDetails.price}</p>
        </>
      )}
    </div>
  );
};

export default BookDetailsPage;
