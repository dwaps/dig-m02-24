import { books } from "../../../models";
import { LinkContainer } from "react-router-bootstrap";
import "./Books.css";

function Books() {
  return (
    <tbody>
      {books.map((b) => (
        <LinkContainer key={b.id} to={`/books/${b.id}`}>
          <tr>
            <td>{b.title}</td>
            <td>{b.author}</td>
            <td>{b.country}</td>
          </tr>
        </LinkContainer>
      ))}
    </tbody>
  );
}

export default Books;
