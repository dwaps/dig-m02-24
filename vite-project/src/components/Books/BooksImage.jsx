function BooksImage({ book }) {
  return (
    <img
      src={book.url}
      style={{ width: "250px", height: "350px", borderRadius: "5%" }}
    ></img>
  );
}

export default BooksImage;
