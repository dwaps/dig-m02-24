// BooksPage.jsx
import { useState } from "react";
import { useLivres } from "./LivresContext";
import { Button, Modal, Form } from "react-bootstrap";

function BooksPage() {
  const { livres, trierParAuteur, supprimerLivre, modifierLivre } = useLivres();
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = (livre) => {
    setSelectedBook(livre);
    setShowModal(true);
  };

  const handleDeleteClick = (livre) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce livre ?")) {
      supprimerLivre(livre);
    }
  };

  const handleSaveChanges = () => {
    modifierLivre(selectedBook);
    setShowModal(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2 className="p-4">Liste de Livres</h2>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th scope="col" onClick={trierParAuteur} style={{ cursor: "pointer" }}>
              Auteur
            </th>
            <th scope="col">Genre</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {livres.map((livre, index) => (
            <tr key={index}>
              <td>{livre.title}</td>
              <td>{livre.author}</td>
              <td>{livre.genre}</td>
              <td>
                <button onClick={() => handleEditClick(livre)}>Éditer</button>
                <button onClick={() => handleDeleteClick(livre)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Bootstrap React pour l'édition */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header className="bg-dark text-light" closeButton>
          <Modal.Title>Édition des Détails du Livre</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          {/* Formulaire pour l'édition des détails du livre */}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le titre"
                value={selectedBook?.title || ""}
                onChange={(e) => setSelectedBook({ ...selectedBook, title: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Auteur</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez l'auteur"
                value={selectedBook?.author || ""}
                onChange={(e) => setSelectedBook({ ...selectedBook, author: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le genre"
                value={selectedBook?.genre || ""}
                onChange={(e) => setSelectedBook({ ...selectedBook, genre: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-dark text-white">
          <Button variant="secondary" onClick={handleModalClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Enregistrer les modifications
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BooksPage;
