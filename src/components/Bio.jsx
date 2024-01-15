import styles from "./Bio.module.css";

/**
 * @param {Object} props
 * @param {String} props.bio
 */
export default function Bio({bio}) {
    return (
        <p className={styles.bio}>
            {bio}
        </p>
    );
}