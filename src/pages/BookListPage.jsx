import { useContext } from "react";

import { BookListContext } from './../App';

import BookList from "../components/BookList/BookList";


function BookListPage() {

  const bookList = useContext(BookListContext)

  return <div className="BookList">
      BookListPage

      <h2>Book list:</h2>
      <BookList bookList={bookList} />
    </div>
  };
  
export default BookListPage;
  