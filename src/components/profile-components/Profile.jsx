import "./Profile.css";
import Bio from "./Bio";
import Name from "./Name";
import Photo from "./Photo";

import { useContext } from "react";
import { SmileyImageContext } from "../../utils/context";

function Profile(props) {
  const { smileyImage, getSmileyImage } = useContext(SmileyImageContext);
  getSmileyImage("bbd6678b-efec-4804-b4af-c6dc2c5667dd");
  console.log(smileyImage);
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
    </div>
  );
}

export default Profile;
