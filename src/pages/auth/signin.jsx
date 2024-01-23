import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAuthLocal } from "../../components/hooks/authlocal";

const SigninPage = ({ setType, type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { currentUser } = useAuthLocal();

  console.warn(currentUser);

  const handleSubmitForm = (data) => {
    // on cherche l'adresse email dans le localStorage
    if (currentUser.length > 0) {
      if (
        currentUser.find((user) => user.email === data.email) &&
        currentUser.find((user) => user.password === data.password)
      )
        window.location.href = "/backoffice";
    } else {
      alert("Cet utilisateur n'existe pas");
    }
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit((data) => handleSubmitForm(data))}
        className=" mx-auto bg-light p-5"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>adresse email</Form.Label>
          <Form.Control
            type="email"
            placeholder="adresse email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              },
            })}
          />
          {errors.email?.type === "required" && (
            <Form.Text className="text-danger">
              Ce champ est obligatoire
            </Form.Text>
          )}
          {errors.email?.type === "pattern" && (
            <Form.Text className="text-danger">
              Merci de saisir une adresse email valide
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="mot de passe"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password?.type === "required" && (
            <Form.Text className="text-danger">
              Ce champ est obligatoire
            </Form.Text>
          )}

          <Form.Text
            className="text-muted m-3"
            onClick={() => setType("signup")}
          >
            Cree un compte
          </Form.Text>
        </Form.Group>

        <button
          className="btn btn-primary"
          type="submit"
          onClick={() => setType(type)}
        >
          Connexion
        </button>
      </Form>
    </div>
  );
};

export default SigninPage;
