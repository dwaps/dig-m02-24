import "./Book.css";
import Photo from "./Photo";
import Description from "./Description";
import Price from "./Price";

function Book(props) {
  return (
    <tr>
      <td className="book-photo">
        <Photo key={props.book.id} photo={props.book.photo} />
      </td>
      <td className="book-description">
        <Description
          key={props.book.id}
          name={props.book.name}
          description={props.book.description}
        />
      </td>
      <td className="book-price">
        <Price key={props.book.id} price={props.book.price} />
      </td>
    </tr>
  );
}

export default Book;
