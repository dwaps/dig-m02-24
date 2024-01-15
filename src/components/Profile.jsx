import styles from "./Profile.module.css";
import Bio from "./Bio";
import Name from "./Name";
import Photo from "./Photo";

/**
 * @param {Object} props
 * @param {import("../App.jsx").User} props.user
 */
export default function Profile({user}) {
    return (
        <div className={styles.profile}>
            <Name firstName={user.firstName} lastName={user.lastName} />

            <Bio bio={user.bio} />

            <Photo photoUrl={user.photoUrl} />
        </div>
    );
}