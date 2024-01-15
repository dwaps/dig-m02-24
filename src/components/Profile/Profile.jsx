import Photo from './../Photo/Photo';
import Bio from './../Bio/Bio';
import Name from './../Name/Name';


function Profile({ user }) {
  return (
    <div className="card bg-dark text-white border-white text-center" style={{ width: '18rem' }}>
      <Photo photoUrl={user.photoUrl} />
      <div className="card-body">
        <Name name={user.name}/>
        <Bio bio={user.bio}/>
      </div>
    </div>
  );
}

export default Profile;