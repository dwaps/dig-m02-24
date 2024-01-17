import React from 'react';
import styles from './BookForm.module.css';
import { Navigate, useParams } from 'react-router-dom';
import { BookListContext } from './../../utils/context/index'
import { useContext, useState } from 'react';
import Photo from '../Photo/Photo';
import { useNavigate } from 'react-router-dom';


const BookForm = ({ isEditing }) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [ books,,, updateBook, addBook ] = useContext(BookListContext);
  Object.keys(books)[Object.keys(books).length - 1]

  const currentBook = books.find((book) => book.id == id)
    
  const [bookTitle, setBookTitleState] = useState(currentBook?.title ?? '');
  const [bookSummary, setBookSummaryState] = useState(currentBook?.summary ?? '');
  const [bookAutor, setBookAutorState] = useState(currentBook?.autor ?? '');
    

  function handleChangeTitle(value) {
    setBookTitleState(value)
  }
  function handleChangeSummary(value) {
    setBookSummaryState(value)
  }
  function handleChangeAutor(value) {
    setBookAutorState(value)
  }

  function editBook() {
    let editedBook = {}
    editedBook.id = currentBook.id
    editedBook.photo = currentBook.photo
    editedBook.title = bookTitle
    editedBook.summary = bookSummary
    editedBook.autor = bookAutor
    updateBook(editedBook)
    navigate("/livres")
  }

  function createBook() {
    let editedBook = {}
    editedBook.id = Number(Object.keys(books)[Object.keys(books).length - 1]) + 1 
    editedBook.photo = books[Math.floor(Math.random()*books.length)].photo
    editedBook.title = bookTitle
    editedBook.summary = bookSummary
    editedBook.autor = bookAutor
    console.log(`POUET`, editedBook)
    addBook(editedBook)
    navigate("/livres")
  }

  if (isEditing) {
    return (
      <form className={styles.BookForm} onSubmit={(e) => {
        e.preventDefault()
        editBook()
      }}>
        <h2>MODIFIER LE LIVRE : <span>{currentBook.title}</span></h2>
        <Photo photo={currentBook.photo}/>
        <div>
          <label htmlFor="title">Titre :</label>
          <input id="title" name="title" type="text" onChange={(e) => {handleChangeTitle(e.target.value)}} value={bookTitle} />
        </div>

        <div>
          <label htmlFor="summary">Sommaire :</label>
          <input id="summary" name="summary" type="text" onChange={(e) => {handleChangeSummary(e.target.value)}} value={bookSummary} />
        </div>

        <div>
          <label htmlFor="autor">Auteur :</label>
          <input id="publisher" name="publisher" type="text" onChange={(e) => {handleChangeAutor(e.target.value)}} value={bookAutor} />
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
          <input id="title" name="title" type="text" onChange={(e) => {handleChangeTitle(e.target.value)}} value={bookTitle} />
        </div>

        <div>
          <label htmlFor="summary">Sommaire :</label>
          <input id="summary" name="summary" type="text" onChange={(e) => {handleChangeSummary(e.target.value)}} value={bookSummary} />
        </div>

        <div>
          <label htmlFor="autor">Auteur :</label>
          <input id="publisher" name="publisher" type="text" onChange={(e) => {handleChangeAutor(e.target.value)}} value={bookAutor} />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    )
  }
}

export default BookForm;
