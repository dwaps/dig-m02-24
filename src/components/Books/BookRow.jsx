function BookRow({ book }) {
  return (
    <tr>
      <td>{book.author}</td>
      <td>{book.title}</td>
      <td>{book.country}</td>
    </tr>
  );
}

export default BookRow;
