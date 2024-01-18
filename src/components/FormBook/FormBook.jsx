import { useContext, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { BooksContext } from "../../utils/context";

function FormBook({ book }) {
  const { books, setBooks } = useContext(BooksContext);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [country, setCountry] = useState(book.country);

  function updateBook(e) {
    e.preventDefault();
    book.title = title;
    book.author = author;
    book.country = country;
    book.editable = false;
    setBooks([...books]);
  }

  function getInput(label, name, value, setter, autofocus = false) {
    return (
      <Form.Group className="mb-3">
        <FloatingLabel label={label} className="mb-3">
          <Form.Control
            type="text"
            name={name}
            value={value}
            onChange={(e) => setter(e.target.value)}
            autoFocus={autofocus}
            autoComplete="off"
            placeholder={label}
          />
        </FloatingLabel>
      </Form.Group>
    );
  }

  return (
    <>
      <Form className="w-75" onSubmit={updateBook}>
        {getInput("Titre du livre", "name", title, setTitle, true)}
        {getInput("Auteur", "author", author, setAuthor)}
        {getInput("Pays", "country", country, setCountry)}
        <Button variant="primary" type="submit">
          Enregistrer
        </Button>
      </Form>
    </>
  );
}

export default FormBook;
