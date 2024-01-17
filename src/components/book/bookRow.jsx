import { useBook } from "../hooks/useBook";
import { useNavigate } from "react-router-dom";

const BookRow = ({ id, title, author, year }) => {
  const { setBook } = useBook();

  const navigate = useNavigate();

  const deleteBook = () => {
    if (window.confirm(" est vous sur de vouloir supprimer ce livre ?")) {
      // delete
    }
  };

  return (
    <tr>
      <td
        onClick={() => {
          setBook({ title, author, year });
          navigate("/book-details", { state: { id, title, author, year } });
        }}
      >
        {title}
      </td>
      <td>{author}</td>
      <td>{year}</td>
      <td>
        <a className="p-2" href="#" onClick={deleteBook}>
          Delete
        </a>{" "}
        |<a className="p-2">Edit</a>
      </td>
    </tr>
  );
};
export default BookRow;
