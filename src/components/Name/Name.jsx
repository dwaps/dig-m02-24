import styles from './Name.module.css';

const Name = ({ name }) => (
  <div className={styles.Name}>
    {name}
  </div>
);

export default Name;
