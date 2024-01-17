import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookDetailsPage.module.css';
import { useParams } from 'react-router-dom';
import { BookListContext } from './../../utils/context/index';
import { useContext } from 'react';
import Book from './../../components/Book/Book'

const BookDetailsPage = () => {
  const { id } = useParams();

  const [ books ] = useContext(BookListContext);

  const book = books.find((book) => book.id == id)

  return (
    <div className={styles.BookDetailsPage}>
      <Book book={book} isDetail={true}></Book>
    </div>
  )
};

export default BookDetailsPage;
