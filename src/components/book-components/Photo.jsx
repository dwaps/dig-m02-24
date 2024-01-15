import "./Photo.css";

function Photo(props) {
  return (
    <div className="photo-book">
      <img src={props.photo} alt="Livre" />
    </div>
  );
}

export default Photo;
