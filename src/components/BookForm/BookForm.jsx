import React from 'react';
import styles from './BookForm.module.css';
import { Navigate, useParams } from 'react-router-dom';
import { BookListContext } from './../../utils/context/index'
import { useContext, useState } from 'react';
import Photo from '../Photo/Photo';
import { useNavigate } from 'react-router-dom';
import { todosReducer } from '../../utils/reducers';
import { useReducer } from 'react';


const BookForm = ({ isEditing }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [ books,,, updateBook, addBook ] = useContext(BookListContext);
  
  const currentBook = books.find((book) => book.id == id)

  const [state, dispatch] = useReducer(todosReducer, {
    bookTitle: currentBook?.title ?? '',
    bookSummary: currentBook?.summary ?? '',
    bookAutor: currentBook?.autor ?? ''
  });

  function todosReducer(currentState, action) {
    switch (action.type) {
      case 'title':
        return { ...currentState, bookTitle: action.payload };
      case 'autor':
        return { ...currentState, bookAutor: action.payload };
      case 'summary':
        return { ...currentState, bookSummary: action.payload };
      default:
        console.error("Action inconnue");
    }
  }

  function editBook() {
    let editedBook = {}
    editedBook.id = currentBook.id
    editedBook.photo = currentBook.photo
    editedBook.title = state.bookTitle
    editedBook.summary = state.bookSummary
    editedBook.autor = state.bookAutor
    updateBook(editedBook)
    navigate("/livres")
  }

  function createBook() {
    let editedBook = {}
    editedBook.id = Number(Object.keys(books)[Object.keys(books).length - 1]) + 1 
    editedBook.photo = books[Math.floor(Math.random()*books.length)].photo
    editedBook.title = state.bookTitle
    editedBook.summary = state.bookSummary
    editedBook.autor = state.bookAutor
    addBook(editedBook)
    navigate("/livres")
  }

  if (isEditing && currentBook) {
    return (
      <form className={styles.BookForm} onSubmit={(e) => {
        e.preventDefault()
        editBook()
      }}>
        <h2>MODIFIER LE LIVRE : <span>{currentBook.title}</span></h2>
        <Photo photo={currentBook.photo}/>
        <div>
          <label htmlFor="title">Titre :</label>
          <input id="title" name="title" type="text" onChange={(e) =>
              dispatch({
                type: 'title',
                payload: e.target.value
              })
            } value={state.bookTitle} />
        </div>

        <div>
          <label htmlFor="summary">Sommaire :</label>
          <input id="summary" name="summary" type="text" onChange={(e) =>
              dispatch({
                type: 'summary',
                payload: e.target.value
              })
            } value={state.bookSummary} />
        </div>

        <div>
          <label htmlFor="autor">Auteur :</label>
          <input id="publisher" name="publisher" type="text" onChange={(e) =>
              dispatch({
                type: 'autor',
                payload: e.target.value
              })
            } value={state.bookAutor} />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    )
  } else {
    return (
      <form className={styles.BookForm} onSubmit={(e) => {
        e.preventDefault()
        createBook()
      }}>
        <h2>AJOUTER UN LIVRE</h2>
        <div>
          <label htmlFor="title">Titre :</label>
          <input id="title" name="title" type="text" onChange={(e) =>
              dispatch({
                type: 'title',
                payload: e.target.value
              })
            } value={state.bookTitle} />
        </div>

        <div>
          <label htmlFor="summary">Sommaire :</label>
          <input id="summary" name="summary" type="text" onChange={(e) =>
              dispatch({
                type: 'summary',
                payload: e.target.value
              })
            } value={state.bookSummary} />
        </div>

        <div>
          <label htmlFor="autor">Auteur :</label>
          <input id="publisher" name="publisher" type="text" onChange={(e) =>
              dispatch({
                type: 'autor',
                payload: e.target.value
              })
            } value={state.bookAutor} />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    )
  }
}

export default BookForm;
