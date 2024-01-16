import Bio from "./Bio";
import Name from "./Name";
import Photo from "./Photo";

const Profile = ({ profile, humeur }) => {
  return (
    <div className="card m-3">
      <Photo image={profile.image} />
      <div className="card-body">
        <div>{humeur}</div>
        <Name titre={profile.titre} />
        <Bio bio={profile.bio} />
      </div>
    </div>
  );
};

export default Profile;
