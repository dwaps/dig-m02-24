import './BookList.css';

import { bookList } from '../../models';
import Book from './../Book/Book'


const BookList = () => (
  <div className="book-list">
    {bookList.map(book => <Book key={book.id} book={book}/>)}
  </div>
);


export default BookList;
