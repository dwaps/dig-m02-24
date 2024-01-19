import Carousel from "react-bootstrap/Carousel";
import plats from "../../db/plats";
const PresentationSection = () => {
  return (
    <section id="presentation">
      <Carousel data-bs-theme="dark">
        {plats.slice(0, 3).map((plat) => {
          return (
            <Carousel.Item key={plat.id}>
              <img
                className="w-70 m-1 p-2 "
                width={1650}
                height={650}
                src={plat.image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5 className=" text-white text-bold ">{plat.title}</h5>
                <p>
                  {plat.ingrediants.map((ingrediant) => {
                    return (
                      <li
                        key={ingrediant}
                        className="text-white m-1 p-2 rounded-3"
                        style={{ listStyleType: "none" }}
                      >
                        {ingrediant}
                      </li>
                    );
                  })}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className="container px-4 py-5">
        <div className="p-5 mb-4  rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Le rapido</h1>
            <p className="col-md-8 fs-4">
              Le Rapido est un restaurant situé au 12 rue de la République, à
              deux pas de la place de la Comédie. Il propose une cuisine
              traditionnelle française, avec des spécialités comme le cassoulet,
              la blanquette de veau ou le magret de canard. Le Rapido est réputé
              pour son service rapide, son ambiance conviviale et ses prix
              raisonnables. C’est une bonne adresse pour un repas en famille,
              entre amis ou en amoureux.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Passer une commande
            </button>
          </div>
        </div>
        <div className="row align-items-md-stretch ">
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>Pour réserver une table</h2>
              <p>
                Le Rapido est ouvert du lundi au samedi, de 11h30 à 14h30 et de
                18h30 à 22h30.
                <br />
              </p>
              <button className="btn btn-outline-secondary" type="button">
                Réserver une table
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>Voir la carte</h2>
              <p>
                Le Rapido a des spécialités Francaises, à la carte. La carte du
                Rapido est disponible ici,
              </p>
              <button className="btn btn-primary" type="button">
                Acceder a la carte
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
