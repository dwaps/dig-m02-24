import "./Photo.css";

function Photo({ user }) {
  return (
    <img
      className="avatar"
      alt={`Photo de ${user.firstName} ${user.lastName}`}
      src={user.photo}
    />
  );
}

export default Photo;
