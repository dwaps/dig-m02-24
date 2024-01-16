import './App.css'
import React, { useState } from 'react';
import Profile from './components/Profile/Profile'
import { profile } from './models'
import BookList from './components/BookList/BookList'

import Smiley from './components/smiley'
import { smileyz } from './models'


function App() {
  const [smiley, setHumor] = useState("Pas d'humeur")


  return <div className="app">

    <div className="profile-smiley-wrapper">

      <div>
        <h2>Un profil:</h2>
        <Profile profile={ profile } />
        Je s'appelle: { smiley }
      </div>

      <div>
        <h2>Quelle est ton humeur du jour ?</h2>
        <div className="smileys-box">
          {smileyz.map((smiley) => (
            <Smiley 
              key={smiley.id} 
              smiley={smiley} 
              onClick={() => {
                setHumor(smiley.image)
              }} />
          ))}
        </div>
      </div>

    </div>

    <h2>Book list:</h2>
    <BookList />
  </div>;
}

export default App
