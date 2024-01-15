import './Profile.css';
import Bio from '../Bio/Bio'
import Name from '../Name/Name'
import Photo from '../Photo/Photo'

function Profile({ profile }) {
  return <div className="Profile">
    Profile
    <Photo photo={ profile.photo } />
    <Name name={ profile.name } />
    <Bio bio={ profile.bio } />
  </div>
};

export default Profile;
