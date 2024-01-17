import { useContext } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { BooksContext } from "../../../utils/context";
import "./Books.css";

function Books() {
  const { books } = useContext(BooksContext);

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
