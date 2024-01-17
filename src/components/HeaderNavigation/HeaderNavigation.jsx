import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderNavigation.module.css';
import { Link } from 'react-router-dom'

const HeaderNavigation = () => (
  <div className={styles.HeaderNavigation}>
    <ul>
      <li>
        <Link to="/accueil">Acceuil</Link>
      </li>
      <li>
        <Link to={"/livres"}>livres</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
    </ul>
  </div>
);

export default HeaderNavigation;
