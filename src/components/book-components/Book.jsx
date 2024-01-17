import "./Book.css";
import Photo from "./Photo";
import Description from "./Description";
import Price from "./Price";
import Auteur from "./Auteur";

function Book(props) {
  return (
    <tr>
      <td className="book-photo">
        <Photo key={props.book.id} photo={props.book.photo} />
      </td>
      <td className="book-auteur">
        <Auteur key={props.book.id} auteur={props.book.auteur} />
      </td>
      <td className="book-description">
        <Description key={props.book.id} book={props.book} />
      </td>
      <td className="book-price">
        <Price key={props.book.id} price={props.book.price} />
      </td>
      <td className="book-actions">
        <button>Update</button>
        <button>Supprimer</button>
      </td>
    </tr>
  );
}

export default Book;
