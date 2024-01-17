import { useContext, useState } from "react";
import { Table } from "react-bootstrap";
import { BooksContext } from "../../utils/context";
import Books from "./components/Books";

function BooksPage() {
  const [isAsc, setIsAsc] = useState(false);
  const { sortBooks } = useContext(BooksContext);

  function onSortByAuthor() {
    setIsAsc(!isAsc);
    sortBooks();
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Titre</th>
          <th onClick={onSortByAuthor}>Auteur {isAsc ? "🔻" : "🔺"}</th>
          <th>Pays</th>
        </tr>
      </thead>
      <Books />
    </Table>
  );
}

export default BooksPage;
