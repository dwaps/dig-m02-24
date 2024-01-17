import { BookProvider, SmileyImageProvider } from "../utils/context";
import { profiles } from "../models/index";
import Profile from "../components/profile-components/Profile";
import Smileys from "../components/smiley-components/Smileys";
import BooksPage from "../components/book-components/BooksPage";
import { useState } from "react";

function MainContent() {
  const [currentMood, setCurrentMood] = useState("Aucun");
  return (
    <div>
      <SmileyImageProvider>
        <h1>Profil</h1>
        <div className="content-profiles">
          <div className="profiles-div">
            {profiles.map((profile) => (
              <div key={profile.id}>
                <Profile profile={profile} currentMood={currentMood} />
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

export default MainContent;
