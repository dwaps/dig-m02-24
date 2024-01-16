import { useContext } from "react";

import { BookListContext } from './../App';

import BookList from "../components/BookList/BookList";


function BookListPage() {

  const bookList = useContext(BookListContext)

  

  // SEARCH COMPONENT
  // ADD BOOK
  // SORT ASC / DESC

  return <div className="BookList">
      <h1>Book list:</h1>
      <BookList bookList={bookList} />
    </div>
  };
  
export default BookListPage;
  