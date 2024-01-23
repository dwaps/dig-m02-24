import { PanierContextProvider } from "../components/hooks/usePanier";
import Menu from "../components/rapidoComponents/menu";
import plats from "../components/db/plats";
import Footer from "../components/rapidoComponents/footer";
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

const BackofficePage = () => {
  const [plat, setPlat] = useState(plats);
  const [search, setSearch] = useState("");

  const [crudType, setCrudType] = useState({
    type: "create",
    id: null,
    title: null,
    image: null,
    description: null,
    price: null,
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deletePlat = (id) => {
    setPlat(plat.filter((plat) => plat.id !== id));
  };

  useEffect(() => {
    setPlat(
      plat.filter((plat) =>
        plat.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <PanierContextProvider>
      <Menu />
      <div className="container my-5 ">
        <h1> Le Rapido Backoffice</h1>

        <input
          type="text"
          placeholder="rechercher"
          className="form-control w-25 mb-3"
          style={{
            float: "right",
            marginRight: "10px",
            border: "1px solid black",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <span className="d-flex  justify-content-between  align-items-center mb-3 ">
          <Button
            variant="primary"
            onClick={() => {
              setCrudType({ ...crudType, type: "create" });
              handleShow();
            }}
            className="btn btn-primary"
            style={{ float: "right", marginRight: "10px" }}
          >
            ajout d'un plat
          </Button>
        </span>

        <span>liste de nos plats : </span>

        <table>
          <thead>
            <tr>
              <th className=" text-center" style={{ width: "100px" }}>
                #
              </th>
              <th className=" text-center" style={{ width: "100px" }}>
                Image
              </th>
              <th className=" text-center" style={{ width: "100px" }}>
                Titre
              </th>
              <th className=" text-center" style={{ width: "100px" }}>
                Prix
              </th>
            </tr>
          </thead>

          <tbody>
            {plat.map((plat) => {
              return (
                <tr key={plat.id}>
                  <td className=" text-center" style={{ width: "100px" }}>
                    {plat.id}
                  </td>
                  <td
                    style={{
                      backgroundImage: `url(${plat.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <img
                      src={plat.image}
                      alt="plat"
                      width="100%"
                      height="150"
                    />
                  </td>
                  <td className=" text-center" style={{ width: "200px" }}>
                    {plat.title}
                  </td>
                  <td className=" text-center" style={{ width: "100px" }}>
                    {plat.price}
                  </td>
                  <td
                    className=" text-center d-flex justify-content-between align-items-center "
                    style={{ width: "100px" }}
                  >
                    <Button
                      variant="primary"
                      className="me-2"
                      onClick={() => {
                        setCrudType({
                          type: "update",
                          id: plat.id,
                          title: plat.title,
                          image: plat.image,
                          description: plat.description,
                          price: plat.price,
                        });
                        handleShow();
                      }}
                    >
                      Modifier
                    </Button>
                    <Button
                      variant="danger"
                      className="me-2"
                      onClick={() => deletePlat(plat.id)}
                    >
                      Supprimer
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{crudType.type} un plat </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <input
                type="text"
                placeholder="Titre"
                className="form-control"
                value={
                  crudType.type === "update" ? crudType.title : crudType.title
                }
                onChange={(e) =>
                  setCrudType({ ...crudType, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Image"
                className="form-control"
                value={
                  crudType.type === "update" ? crudType.image : crudType.image
                }
                onChange={(e) =>
                  setCrudType({ ...crudType, image: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Description"
                className="form-control"
                value={
                  crudType.type === "update"
                    ? crudType.description
                    : crudType.description
                }
                onChange={(e) =>
                  setCrudType({ ...crudType, description: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Prix"
                className="form-control"
                value={
                  crudType.type === "update" ? crudType.price : crudType.price
                }
                onChange={(e) =>
                  setCrudType({ ...crudType, price: e.target.value })
                }
              />

              <Button
                variant="primary"
                onClick={() => {
                  if (crudType.type === "create") {
                    setCrudType({ ...crudType, id: Date.now() });
                    setPlat([...plat, crudType]);
                  } else {
                    setPlat(
                      plat.map((plat) =>
                        plat.id === crudType.id ? crudType : plat
                      )
                    );
                  }
                  handleClose();
                }}
              >
                Ajouter
              </Button>
            </div>
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
      <Footer />
    </PanierContextProvider>
  );
};

export default BackofficePage;
