import Photo from "./Photo";
import Name from "./Name";
import Bio from "./Bio";
import "./Profile.css";

function Profile({ mood }) {
  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <Photo filepath="https://static.vecteezy.com/ti/vecteur-libre/p1/2002300-belle-femme-avatar-personnage-icone-gratuit-vectoriel.jpg" />
      <Name firstname="Emilia" lastname="FERNANDEZ" mood={mood} />
      <Bio about="lorem ipsum..." />
    </div>
  );
}

export default Profile;
