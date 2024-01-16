import Photo from "./Photo/Photo";
import Name from "./Name/Name";
import Bio from "./Bio/Bio";
import Humor from "./Humor/Humor";
import { user } from "../../models";

function Profile({ humor }) {
  return (
    <>
      <Photo user={user}></Photo>
      <Name firstName={user.firstName} lastName={user.lastName}></Name>
      <Bio bio={user.bio}></Bio>
      <Humor humor={humor}></Humor>
    </>
  );
}

export default Profile;
