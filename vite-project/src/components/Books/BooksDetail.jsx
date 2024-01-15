import BooksAuthor from "./BooksAuthor";
import BooksImage from "./BooksImage";
import BooksRanking from "./BooksRanking";

function BooksDetail({ book }) {
  return (
    <li key={book.id}>
      <BooksImage book={book}></BooksImage>
      <BooksAuthor book={book}></BooksAuthor>
      <BooksRanking book={book}></BooksRanking>
    </li>
  );
}

export default BooksDetail;
