import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    handleSubmit,
    register,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "Coco",
    },
  });

  watch("lastname");
  console.log(getValues());

  const onValid = (data) => console.log(data);
  const onError = (errors) => console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onValid, onError)}>
        <input
          {...register("firstname", {
            validate: (value) => value >= 3 || "Pas ok",
          })}
        />
        {errors?.firstname && (
          <p style={{ color: "red" }}>{errors.firstname.message}</p>
        )}
        <input {...register("lastname")} />
        <button>Enregistrer</button>
      </form>
    </>
  );
}

export default App;
