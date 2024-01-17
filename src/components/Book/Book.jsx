import './Book.css';
import { useContext } from "react";
import Profile from '../Profile/Profile';
import BookData from './../BookData/BookData';
import { Link } from "react-router-dom";

function Book ({book, onDeleteBook}) {

  return (
    <div className="Book">
      <img src={book.bookImg} />

      <h4>title:</h4>
      <Link to={`/bookpage/${book.id}`}>{book.title}</Link>

      <h4>Summary:</h4>
      {book.summary}
      
      <h4>Author:</h4>
      <Profile profile={book.profile} />

      <h4>BookData:</h4> 
      <BookData data={book.data} />
      {
        !!onDeleteBook && (
          <button onClick={()=>{
            onDeleteBook(book)
          }}>Delete</button>
        )
      }
    </div>
  )
};

export default Book;
