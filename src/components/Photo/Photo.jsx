function Photo({ photoUrl }) {
    return (
      <div className="card-img-top">
        {/* Ajoutez votre balise <img> ici */}
        <img src={photoUrl} alt="Photo de profil" />
      </div>
    );
  }
  
  export default Photo;