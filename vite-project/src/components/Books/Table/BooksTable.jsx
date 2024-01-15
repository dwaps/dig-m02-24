import BooksTableDetail from "./BooksTableDetail";

function BooksTable({ allBooks }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Illustration</th>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {allBooks.map((book) => (
          <BooksTableDetail key={book.id} book={book}></BooksTableDetail>
        ))}
      </tbody>
    </table>
  );
}

export default BooksTable;
