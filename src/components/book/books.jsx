import books from "./bookData";
const Books = () => {
  return (
    <div className="books">
      <table className="table" style={{ width: "100%" }}>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
          </tr>
        </thead>

        <tbody style={{ textAlign: "center" }}>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
