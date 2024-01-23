const Footer = () => {
  return (
    <footer className=" container-fluid py-5 bg-dark text-white text-center text-lg-start ">
      <div className="row d-flex justify-content-center text-center text-md-start ">
        <div className="col-6 col-md-2 mb-3 ">
          <h5>Le Rapido </h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/auth" className="nav-link p-0 ">
                Mon Compte admin
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#presentation" className="nav-link p-0 ">
                Présentation
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#carte" className="nav-link p-0 ">
                Carte
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#localisation" className="nav-link p-0 ">
                Localisation
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Nos services </h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Mon panier
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Mes commandes
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
                Mes informations
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>S'inscrire a la newsletter</h5>
            <p>Tout les lundis et mercredi </p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label className="visually-hidden">Email address</label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                S'inscrire
              </button>
            </div>
          </form>
          <label className="text-white p-2 m-2 ">
            Le Rapido est ouvert du lundi au samedi, de 11h30 à 14h30 et de
            18h30 à 22h30. <br /> Pour réserver, vous pouvez appeler le 04 67 60
            60 60 ou visiter le site web ici. Bon appétit !
          </label>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2024 All rights reserved by Le Rapido</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <svg className="bi" width="24" height="24"></svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <svg className="bi" width="24" height="24"></svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <svg className="bi" width="24" height="24"></svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
