function Livre({ title, author, genre }) {
    return (
      <tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>{genre}</td>
      </tr>
    );
  }
  
  export default Livre;