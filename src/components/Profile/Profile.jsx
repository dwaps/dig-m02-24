import PropTypes from 'prop-types';
import './Profile.css';
import Bio from '../Bio/Bio'
import Name from '../Name/Name'
import Photo from '../Photo/Photo'
import { profile } from '../../models'

function Profile() {

  return <div className="Profile">
    Profile Component
    <Photo profile={ profile } />
    <Name name={ profile.name } />
    <Bio bio={ profile.bio } />
  </div>
};

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
