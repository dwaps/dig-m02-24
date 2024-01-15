import Name from "./Name";
import Bio from "./bio";
import Photo from "./photo";

const Profil = () => {
  return (
    <div className="profil" style={{ textAlign: "center" }}>
      <Photo src="https://picsum.photos/200/300" />
      <Name name="Toto" />
      <Bio info={" Toto le bg de la street de la ville"} />
    </div>
  );
};

export default Profil;
