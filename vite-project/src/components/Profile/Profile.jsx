import Photo from "./Photo/Photo";
import Name from "./Name/Name";
import Bio from "./Bio/Bio";
import { user } from "../../models";

export default function Profile() {
  return (
    <>
      <Photo user={user}></Photo>
      <Name firstName={user.firstName} lastName={user.lastName}></Name>
      <Bio bio={user.bio}></Bio>
    </>
  );
}
