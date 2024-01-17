import { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
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
      <Row className="text-center mt-3">
        <Col>
          <img width={500} src={book.imageLink} alt="Couverture" />
        </Col>
        <Col>
          <Card className="text-start my-5" style={{ width: "500px" }}>
            <Card.Body>
              <Card.Title className="text-center">Détails</Card.Title>
              <Card.Text className="my-5">
                <strong>Auteur:</strong> {book.author}
                <br />
                <strong>Language:</strong> {book.language}
                <br />
                <strong>Wikipédia:</strong>
                <a href={book.link} target="_blank" rel="noreferrer noopener">
                  {book.link}
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BookDetailsPage;
