const Livre = ({ livre }) => {
  return (
    <tr>
      <td>{livre.sku}</td>
      <td>{livre.title}</td>
      <td>{livre.author}</td>
    </tr>
  );
};

export default Livre;
