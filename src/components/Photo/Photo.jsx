function Photo({ photoUrl }) {
    return (
      <div className="card-img-top">
        <img src={photoUrl} className="card-img-top" alt="Photo de profil" />
      </div>
    );
  }
  
  export default Photo;