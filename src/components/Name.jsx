import styles from "./Name.module.css";

/**
 * @param {Object} props
 * @param {String} props.firstName
 * @param {String} props.lastName
 */
export default function Name({firstName, lastName}) {
    return (
        <h1 className={styles.name}>
            {firstName} {lastName}
        </h1>
    );
}