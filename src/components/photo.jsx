const Photo = ({ src }) => {
  return (
    <div>
      <img src={src} alt="photo" width="200px" height="200px" style={{ borderRadius: "50%" }} />
    </div>
  );
};

export default Photo;
