import { useEffect, useState } from "react";
import books from "./bookData";
import BookRow from "./bookRow";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Books = () => {
  const [book, setBook] = useState(books);
  const [search, setSearch] = useState("");
  const [shortBy, setShortBy] = useState("asc");

  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // new book
  const [newBook, setNewBook] = useState({
    title: null,
    author: null,
    year: null,
  });

  const shortByAuthor = () => {
    setShortBy(shortBy === "asc" ? "desc" : "asc");
    if (shortBy === "asc") {
      books.sort((a, b) => (a.author > b.author ? 1 : -1));
    }
    if (shortBy === "desc") {
      books.sort((a, b) => (a.author < b.author ? 1 : -1));
    }
  };

  useEffect(() => {
    setBook(
      books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="books" style={{ textAlign: "center" }}>
      <h2>Books</h2>

      <input
        type="text"
        placeholder="Search"
        style={{ width: "100%" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <a className="m-2 p-4" href="#" onClick={handleShow}>
        Ajouter un livre
      </a>

      <table className="table" style={{ width: "100%" }}>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th onClick={() => shortByAuthor()}>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th> Action</th>
          </tr>
        </thead>

        <tbody style={{ textAlign: "center" }}>
          {book.map((book) => (
            <BookRow key={book.id} {...book} books={book} />
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Creer un livre </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              placeholder="Title"
              type="text"
              className="form-control"
              value={newBook.title}
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              placeholder="Author"
              type="text"
              className="form-control"
              value={newBook.author}
              onChange={(e) =>
                setNewBook({ ...newBook, author: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="form-label">
              Year
            </label>
            <input
              placeholder="Year"
              type="text"
              className="form-control"
              value={newBook.year}
              onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => setBook([...book, newBook])}
          >
            Submit
          </button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Books;
