import "./App.css";
import Profile from "./components/profile-components/Profile";
import Smileys from "./components/smiley-components/Smileys";
import { useState } from "react";

import { profiles } from "./models";
import { BookProvider, SmileyImageProvider } from "./utils/context";
import BooksPage from "./components/book-components/BooksPage";

function App() {
  const [currentMood, setCurrentMood] = useState("Aucun");
  return (
    <div className="App">
      <SmileyImageProvider>
        <h1>Profil</h1>
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
      </SmileyImageProvider>
      <BookProvider>
        <BooksPage />
      </BookProvider>
    </div>
  );
}

export default App;
