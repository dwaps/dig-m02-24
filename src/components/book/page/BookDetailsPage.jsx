import { useBook } from "../../hooks/useBook";

const BookDetailsPage = () => {
  const { book } = useBook();
  return (
    <div>
      <h1>{book?.title}</h1>
      <p>{book?.author}</p>
      <p>{book?.year}</p>
    </div>
  );
};
export default BookDetailsPage;
