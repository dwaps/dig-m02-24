function BooksAuthor({ book }) {
  return (
    <div>
      <p>{book.title}</p>-<h3 style={{ fonwtWeight: "bold" }}>{book.author}</h3>
    </div>
  );
}

export default BooksAuthor;
