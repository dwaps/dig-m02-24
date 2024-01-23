import { Button } from "react-bootstrap";
import {
  PanierContextProvider,
  usePanier,
} from "../components/hooks/usePanier";
import Footer from "../components/rapidoComponents/footer";
import Menu from "../components/rapidoComponents/menu";
import myPanier from "../components/rapidoComponents/panierStateLocal/panierLocalStorage";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const CommandPage = () => {
  const { panier, setPanier } = usePanier();
  const { panierLocalStorage, setPanierLocalStorage } = myPanier();

  const [command, setCommand] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <PanierContextProvider>
      <Menu />
      <div className="container my-5 ">
        <h3 className="pb-2 border-bottom">Commande</h3>
        <p className="list-group">
          {panierLocalStorage.map((plat) => (
            <li
              className="list-group-item list-group-item-action fs-5"
              key={plat.id}
            >
              {plat.title}
            </li>
          ))}
        </p>
      </div>

      <div className="container my-5 ">
        <h3 className="pb-2 border-bottom">Prix total</h3>
        <p className="list-group">
          {panierLocalStorage.map((plat) => (
            <li
              className="list-group-item list-group-item-action fs-5"
              key={plat.id}
            >
              {plat.price}
            </li>
          ))}
        </p>
      </div>

      {command === "Commande en cours" ? (
        <div className="container my-5 ">
          <h3 className="pb-2 border-bottom">Commande en cours </h3>
          <p className="list-group">
            {panierLocalStorage.map((plat) => (
              <li
                className="list-group-item list-group-item-action fs-5"
                key={plat.id}
              >
                {plat.title}
              </li>
            ))}
          </p>

          <p className="text-success">Commande en cours</p>
          <span>
            Votre commande est en cours de preparation et sera livree bientot
          </span>
        </div>
      ) : (
        <div className="container my-5 ">
          <h3 className="pb-2 border-bottom">Adresse de livraison</h3>
          <Form
            onSubmit={handleSubmit((data) => {
              setCommand("Commande en cours");
            })}
            className="w-50  mx-auto bg-light p-3 rounded-3"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer votre nom"
                {...register("nom", { required: true })}
              />

              {errors.nom && (
                <span className="text-danger">Le nom est requis</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer votre adresse"
                {...register("adresse", { required: true })}
              />

              {errors.adresse && (
                <span className="text-danger">L'adresse est requise</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ville</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer votre ville"
                {...register("ville", { required: true })}
              />

              {errors.ville && (
                <span className="text-danger">La ville est requise</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Code postal</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer votre code postal"
                {...register("codePostal", { required: true })}
              />

              {errors.codePostal && (
                <span className="text-danger">Le code postal est requis</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Pays</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer votre pays"
                {...register("pays", { required: true })}
              />

              {errors.pays && (
                <span className="text-danger">Le pays est requis</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Telephone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer votre telephone"
                {...register("telephone", { required: true })}
              />

              {errors.telephone && (
                <span className="text-danger">Le telephone est requis</span>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrer votre email"
                {...register("email", { required: true })}
              />

              {errors.email && (
                <span className="text-danger">L'email est requis</span>
              )}
            </Form.Group>

            <Button
              variant="primary"
              className="w-100 my-5 "
              onClick={handleSubmit(onsubmit)}
            >
              Commander
            </Button>
          </Form>
        </div>
      )}

      <Footer />
    </PanierContextProvider>
  );
};
export default CommandPage;
