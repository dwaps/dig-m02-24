import styles from './Profile.module.css';
import Photo from '../Photo/Photo'
import Name from '../Name/Name'
import Bio from '../Bio/Bio'

const Profile = ( {profile} ) => (
  <div className={styles.Profile}>
    <Photo photo={profile.photo}></Photo>
    <Name name={profile.name}></Name>
    <Bio bio={profile.bio}></Bio>
  </div>
);

export default Profile;
