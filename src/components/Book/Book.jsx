import './Book.css';
import Profile from '../Profile/Profile';
import BookData from './../BookData/BookData';
import { Link } from "react-router-dom";

const Book = ({book}) => (
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
  </div>
);

export default Book;
