import BooksAuthor from "./BooksAuthor";
import BooksImage from "./BooksImage";
import BooksRanking from "./BooksRanking";

function BooksDetail({ book }) {
  return (
    <div key={book.id} style={{ margin: "70px" }}>
      <BooksImage book={book}></BooksImage>
      <BooksAuthor book={book}></BooksAuthor>
      <BooksRanking book={book}></BooksRanking>
    </div>
  );
}

export default BooksDetail;
