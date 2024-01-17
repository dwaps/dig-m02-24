import { Table } from "react-bootstrap";
import Books from "./components/Books";

function BooksPage() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Pays</th>
        </tr>
      </thead>
      <Books />
    </Table>
  );
}

export default BooksPage;
