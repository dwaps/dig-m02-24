import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ searchBook }) => {
  function handleChangeTitleSearch(inputValue) {
    searchBook(inputValue)
  }

  return (
    <div className={styles.SearchBar}>
      <label htmlFor="searchTitle">Rechercher par titre : </label>
      <input id="searchTitle" name="searchTitle" type="text" onChange={(e) => {handleChangeTitleSearch(e.target.value)}} />
    </div>
  )
};

export default SearchBar;
