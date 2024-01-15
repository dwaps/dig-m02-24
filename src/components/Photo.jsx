const Photo = ({ image }) => {
  return <img className="card-img-top" src={image.src} alt={image.alt}></img>;
};

export default Photo;
