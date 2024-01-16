import "./App.css";
import Profile from "./components/profile-components/Profile";
import Book from "./components/book-components/Book";
import Smileys from "./components/smiley-components/Smileys";
import { useState } from "react";

import { profiles, books } from "./models";

function App() {
  const [currentMood, setCurrentMood] = useState("Aucun");
  return (
    <div className="App">
      <h1>Liste des profils</h1>
      <div className="content-profiles">
        <div className="profiles-div">
          {profiles.map((profile) => (
            <div>
              <Profile
                key={profile.id}
                profile={profile}
                currentMood={currentMood}
              />
              <Smileys setCurrentMood={setCurrentMood} />
            </div>
          ))}
        </div>
      </div>
      <h1>Tableau de livres</h1>
      <div className="content-books">
        <div className="books-tab">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Informations</th>
                <th>Prix</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <Book key={book.id} book={book} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
