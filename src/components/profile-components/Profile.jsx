import "./Profile.css";
import Bio from "./Bio";
import Name from "./Name";
import Photo from "./Photo";

function Profile(props) {
  return (
    <div className="profile-item">
      <div className="profile-photo">
        <Photo key={props.profile.id} photo={props.profile.photo} />
      </div>
      <div className="profile-name">
        <Name key={props.profile.id} name={props.profile.name} />
      </div>
      <div className="profile-bio">
        <Bio key={props.profile.id} bio={props.profile.bio} />
      </div>
    </div>
  );
}

export default Profile;
