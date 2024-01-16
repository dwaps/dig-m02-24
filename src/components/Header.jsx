import {NavLink} from "react-router-dom";

import styles from "./Header.module.scss";
import {tag} from "../utils/tag.js";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <NavLink to="/" className={({isActive}) => tag`${styles.nav__link} ${isActive && styles.nav__link__active}`}>
                    Home
                </NavLink>

                <NavLink to="/books" className={({isActive}) => tag`${styles.nav__link} ${isActive && styles.nav__link__active}`}>
                    Books
                </NavLink>

                <NavLink to="/contact" className={({isActive}) => tag`${styles.nav__link} ${isActive && styles.nav__link__active}`}>
                    Contact
                </NavLink>
            </nav>
        </header>
    );
}