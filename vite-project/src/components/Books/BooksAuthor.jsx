import "./BooksAuthor.css";

function BooksAuthor({ book }) {
  return (
    <div className="books-author-container">
      <p className="book-title">{book.title}</p>
      <h3 className="book-author">{book.author}</h3>
    </div>
  );
}

export default BooksAuthor;
