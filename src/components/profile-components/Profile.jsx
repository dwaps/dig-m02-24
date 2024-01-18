import "./Profile.css";
import Bio from "./Bio";
import Name from "./Name";
import Photo from "./Photo";
import { Link } from "react-router-dom";

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
      <div className="profile-mood">
        <p>Son mood : {props.currentMood}</p>
      </div>
      <div className="profile-todo">
        <Link to="/todolist">
          <p>Ma todo list</p>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
