import { useContext } from "react";
import { BookListContext } from '../models/utils/context/index';


function CreateBookPage() {
   const bookList = useContext(BookListContext)

  return (
    <form className="create-book">
      <div>
        <label htmlFor="title">Title:</label>
        <input id="title" name="title" type="text" />
      </div>
      
      <div>
        <label htmlFor="summary">Summary:</label>
        <input id="summary" name="summary" type="text" />
      </div>
      
      <div>
        <label htmlFor="publisher">Publisher:</label>
        <input id="publisher" name="publisher" type="text" />
      </div>
      
      <div>
        <label htmlFor="releaseDate">Release date:</label>
        <input id="releaseDate" name="releaseDate" type="text" />
      </div>
      
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" />
      </div>
      
      <div>
        <label htmlFor="bio">Bio:</label>
        <input id="bio" name="bio" type="text" />
      </div>

      <button type="submit">Envoyer</button>
      
    </form>
  )
  
}
  
export default CreateBookPage;
  