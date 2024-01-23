import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAuthLocal, userLocal } from "../../components/hooks/authlocal";

const SignupPage = ({ setType, type }) => {
  const { currentUser, setCurrentUser } = useAuthLocal();

  const { userLocalStorage, setUserLocalStorage } = userLocal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data) => {
    // on check si l'email existe dans le localStorage et on renvoie un message d'erreur

    if (currentUser.email === data.email) {
      alert("Cet utilisateur existe déjà");
      return;
    }
    setUserLocalStorage([...userLocalStorage, data]);
    alert("Utilisateur enregistré");
    window.location.href = "/backoffice";
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit((data) => handleSubmitForm(data))}
        className="mx-auto bg-light p-5"
        style={{ maxWidth: "500px" }}
      >
        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nom"
            {...register("nom", {
              required: true,
            })}
          />
          {errors.nom && (
            <span className="text-danger">Ce champ est obligatoire</span>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label>Prenom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Prenom"
            {...register("prenom", {
              required: true,
            })}
          />
          {errors.prenom && (
            <span className="text-danger">Ce champ est obligatoire</span>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <span className="text-danger">Ce champ est obligatoire</span>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Mot de passe"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <span className="text-danger">Ce champ est obligatoire</span>
          )}
        </Form.Group>

        <button className="btn btn-primary w-100  mt-3" type="submit">
          S'enregistrer
        </button>
      </Form>
    </div>
  );
};

export default SignupPage;
