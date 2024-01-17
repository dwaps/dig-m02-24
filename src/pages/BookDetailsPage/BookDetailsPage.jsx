import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { BooksContext } from "../../utils/context";

function BookDetailsPage() {
  const { id } = useParams();
  const { getBook } = useContext(BooksContext);
  let book = getBook(id);

  return (
    <Container fluid>
      <Row className="text-center mt-3">
        <Col>
          <h1>{book.title}</h1>
          <h6>
            {book.pages} pages - {book.year}
          </h6>
          <Link to="/books">Retour à la liste</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default BookDetailsPage;
