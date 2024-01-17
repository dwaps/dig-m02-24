// BooksPage.jsx
import { useState } from "react";
import { useLivres } from "./LivresContext";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function BooksPage() {
  const {
    livres,
    trierParAuteur,
    supprimerLivre,
    modifierLivre,
    ajouterLivre,
  } = useLivres();
  const [selectedBook, setSelectedBook] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleEditClick = (livre) => {
    setSelectedBook(livre);
    setShowEditModal(true);
  };

  const handleDeleteClick = (livre) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce livre ?")) {
      supprimerLivre(livre);
    }
  };

  const handleSaveChanges = () => {
    modifierLivre(selectedBook);
    setShowEditModal(false);
  };

  const handleCreateClick = () => {
    setSelectedBook({ title: "", author: "", genre: "" });
    setShowCreateModal(true);
  };

  const handleSaveCreate = () => {
    ajouterLivre(selectedBook);
    setShowCreateModal(false);
  };

  const handleModalClose = () => {
    setShowEditModal(false);
    setShowCreateModal(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredLivres = livres.filter((livre) =>
    livre.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="p-4">Liste de Livres</h2>
      <Button variant="primary" onClick={handleCreateClick} className="mb-3 btn btn-light">
        Créer un Nouveau Livre
      </Button>

      <Form.Group controlId="search">
        <Form.Control
          type="text"
          placeholder="Rechercher un livre"
          value={searchTerm}
          onChange={handleSearch}
        />
      </Form.Group>

      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th
              scope="col"
              onClick={trierParAuteur}
              style={{ cursor: "pointer" }}
            >
              Auteur
            </th>
            <th scope="col">Genre</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredLivres.map((livre, index) => (
            <tr key={index}>
              <td>
                <Link to={`/livres/${livre.title}`}>{livre.title}</Link>
              </td>
              <td>{livre.author}</td>
              <td>{livre.genre}</td>
              <td>
                <button onClick={() => handleEditClick(livre)}>Éditer</button>
                <button onClick={() => handleDeleteClick(livre)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showEditModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Éditer le Livre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le titre"
                value={selectedBook?.title || ""}
                onChange={(e) =>
                  setSelectedBook({ ...selectedBook, title: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Auteur</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez l'auteur"
                value={selectedBook?.author || ""}
                onChange={(e) =>
                  setSelectedBook({ ...selectedBook, author: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le genre"
                value={selectedBook?.genre || ""}
                onChange={(e) =>
                  setSelectedBook({ ...selectedBook, genre: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Enregistrer les Modifications
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showCreateModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Créer un Nouveau Livre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le titre"
                value={selectedBook?.title || ""}
                onChange={(e) =>
                  setSelectedBook({ ...selectedBook, title: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Auteur</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez l'auteur"
                value={selectedBook?.author || ""}
                onChange={(e) =>
                  setSelectedBook({ ...selectedBook, author: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le genre"
                value={selectedBook?.genre || ""}
                onChange={(e) =>
                  setSelectedBook({ ...selectedBook, genre: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleSaveCreate}>
            Enregistrer le Livre
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BooksPage;
