import './Book.css';
import Profile from '../Profile/Profile';
import BookData from './../BookData/BookData';

const Book = ({book}) => (
  <div className="Book">
    <img src={book.bookImg} />

    <h4>title:</h4>
    {book.title}

    <h4>Summary:</h4>
    {book.summary}

    <h4>Author:</h4>
    <Profile profile={book.profile} />

    <h4>BookData:</h4> 
    <BookData data={book.data} />
  </div>
);

export default Book;
