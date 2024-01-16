function Photo({ filepath }) {
  return (
    <img src={filepath} alt="Avatar" width={120} className="card-img-top" />
  );
}

export default Photo;
