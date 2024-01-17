import { books } from "../../../models";
import "./Books.css";

function Books() {
  return (
    <tbody>
      {books.map((b) => (
        <tr key={b.id}>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.country}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default Books;
