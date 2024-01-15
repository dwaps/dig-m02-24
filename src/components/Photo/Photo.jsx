import styles from './Photo.module.css';

const Photo = ({ photo }) => (
  <div className={styles.Photo}>
    <img src={photo} alt="" className={styles.PhotoImage}/>
  </div>
);

export default Photo;
