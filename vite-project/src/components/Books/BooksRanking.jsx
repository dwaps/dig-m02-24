function BooksRanking({ book }) {
  return (
    <span style={{ color: book.stars > 5 ? "green" : "orange" }}>
      {book.stars}/10
    </span>
  );
}

export default BooksRanking;
