import plats from "../../db/plats";
import Card from "../card";

const CarteSection = () => {
  return (
    <section id="carte">
      <div className="container px-4 py-5">
        <h2 className="pb-2 border-bottom"> Notre carte</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {plats.map((plat) => {
            return (
              <div className="col" key={plat.id}>
                <Card plat={plat} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CarteSection;
