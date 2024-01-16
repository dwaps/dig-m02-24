import styles from "./Smiley.module.scss";
import {tag} from "../utils/tag";

/**
 * @param {Object} props
 * @param {import("../App").Smiley} props.smiley
 * @param {Boolean} props.isSelected
 * @param {Function} props.onClick
 */
export default function Smiley({smiley, isSelected, onClick}) {
    return (
        <div className={tag`${styles.smiley} ${isSelected && styles.smiley__selected}`} onClick={onClick}>
            {smiley.image}
        </div>
    );
}