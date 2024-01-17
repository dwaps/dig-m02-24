import { useState, useEffect } from "react";
import BooksTableDetail from "./BooksTableDetail";

function BooksTable({
  allBooks,
  onDeleteBook,
  onUpdateBook,
  onSortBooks,
  onCreateBook,
}) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedBooks, setSortedBooks] = useState(allBooks);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [editedBook, setEditedBook] = useState({
    id: 2,
    title: "",
    author: "",
    price: "",
    stars: "",
    url: "",
  });
  const [newBook, setNewBook] = useState({
    id: 2,
    title: "",
    author: "",
    price: "",
    stars: "",
    url: "",
  });

  useEffect(() => {
    setSortedBooks([...allBooks]);
  }, [allBooks]);

  useEffect(() => {
    const filteredBooks = allBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    setSortedBooks(filteredBooks);
  }, [searchTitle, allBooks]);

  const handleSortByAuthor = () => {
    onSortBooks();
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  const handleDelete = (bookId) => {
    onDeleteBook(bookId);
  };

  const handleEdit = (book) => {
    setEditedBook({ ...book });
    setIsEditing(true);
  };

  const handleUpdate = () => {
    console.log(editedBook);
    onUpdateBook(editedBook);
    setIsEditing(false);
    setEditedBook({
      id: "",
      title: "",
      author: "",
      price: "",
      stars: "",
      url: "",
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedBook({
      id: "",
      title: "",
      author: "",
      price: "",
      stars: "",
      url: "",
    });
  };

  const handleCreate = () => {
    setIsCreating(true);
  };

  const handleSaveNewBook = () => {
    console.log(newBook);
    onCreateBook(newBook);
    setIsCreating(false);
    setNewBook({
      id: 2,
      title: "",
      author: "",
      price: "",
      stars: "",
      url: "",
    });
  };

  const handleCancelCreate = () => {
    setIsCreating(false);
    setNewBook({
      id: 2,
      title: "",
      author: "",
      price: "",
      stars: "",
      url: "",
    });
  };

  return (
    <>
      <div>
        <label>
          Rechercher par titre:
          <input
            type="text"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </label>
        <button onClick={handleCreate}>Créer un livre</button>
      </div>

      {isCreating && (
        <div>
          <label>
            Titre:
            <input
              type="text"
              value={newBook.title}
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
            />
          </label>
          <label>
            Auteur:
            <input
              type="text"
              value={newBook.author}
              onChange={(e) =>
                setNewBook({ ...newBook, author: e.target.value })
              }
            />
          </label>
          <label>
            Note:
            <input
              type="text"
              value={newBook.stars}
              onChange={(e) =>
                setNewBook({ ...newBook, stars: e.target.value })
              }
            />
          </label>
          <label>
            Prix:
            <input
              type="text"
              value={newBook.price}
              onChange={(e) =>
                setNewBook({ ...newBook, price: e.target.value })
              }
            />
          </label>
          <button onClick={handleSaveNewBook}>Enregistrer</button>
          <button onClick={handleCancelCreate}>Annuler</button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Illustration</th>
            <th>Titre</th>
            <th onClick={handleSortByAuthor} style={{ cursor: "pointer" }}>
              Auteur {sortOrder === "asc" ? "↑" : "↓"}
            </th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortedBooks.map((book) => (
            <BooksTableDetail
              key={book.id}
              book={book}
              onDelete={() => handleDelete(book.id)}
              onUpdate={() => handleEdit(book)}
            ></BooksTableDetail>
          ))}
        </tbody>
      </table>

      {isEditing && (
        <div>
          <label>
            Titre:
            <input
              type="text"
              value={editedBook.title}
              onChange={(e) => {
                setEditedBook({ ...editedBook, title: e.target.value });
              }}
            />
          </label>
          <label>
            Auteur:
            <input
              type="text"
              value={editedBook.author}
              onChange={(e) =>
                setEditedBook({ ...editedBook, author: e.target.value })
              }
            />
          </label>
          <button onClick={handleUpdate}>Enregistrer</button>
          <button onClick={handleCancelEdit}>Annuler</button>
        </div>
      )}
    </>
  );
}

export default BooksTable;
