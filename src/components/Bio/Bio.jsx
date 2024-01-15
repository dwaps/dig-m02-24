import styles from './Bio.module.css';


const Bio = ({ bio }) => (
  <div className={styles.Bio}>
    {bio}
  </div>
);

export default Bio;
