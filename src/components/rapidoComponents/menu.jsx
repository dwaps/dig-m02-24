import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { usePanier } from "../hooks/usePanier";
const Menu = () => {
  const { panier } = usePanier();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Le Rapido </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/#presentation">Présentation</Nav.Link>
            <Nav.Link href="/#carte">Carte</Nav.Link>
            <Nav.Link href="/#localisation">Localisation</Nav.Link>
            <Nav.Link href="/panier">
              Mon Panier
              <Badge className=" p-2" bg="primary">
                {panier.length}
              </Badge>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Chercher un plat..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Rechercher un produit</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
