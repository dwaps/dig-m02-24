import styles from "./Photo.module.css";

/**
 * @param {Object} props
 * @param {String} props.photoUrl
 */
export default function Photo({photoUrl}) {
    return (
        <img src={photoUrl} alt="Photo" />
    );
}