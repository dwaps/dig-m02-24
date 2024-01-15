import styles from "./App.module.css";
import Profile from "./components/Profile";

/**
 * @typedef {Object} User
 * @property {Number} id
 * @property {String} firstName
 * @property {String} lastName
 * @property {String} bio
 * @property {String} photoUrl
 */

/**
 * @type {User}
 */
const user = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    bio: "Lorem ipsum dolor sit amet",
    photoUrl: "/photo.jpg",
};

export default function App() {
    return (
        <div className={styles.app}>
            <Profile user={user} />
        </div>
    );
}