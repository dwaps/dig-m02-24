import { useParams } from "react-router-dom";
import { useContext } from "react";

import Book from "../components/Book/Book";
import { BookListContext } from './../App'

import NotFound from "./NotFound";

function BookPage() {
  const id = Number(useParams().id)
  const bookList = useContext(BookListContext)

  let book = bookList.find(book => book.id === id)

  if(!book){ 
    return (
      <NotFound />
    )
  } else {
    return ( 
      <Book book={book} />
    )
  }
}
  
export default BookPage;
  