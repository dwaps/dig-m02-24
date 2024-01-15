import './Photo.css';

const Photo = ({ profile }) => (
  <img className="Photo" src={ profile.photo }/>
);

export default Photo;
