import './App.css'
import Profile from './components/Profile/Profile'
import { profile } from './models'
import BookList from './components/BookList/BookList'

function App() {
  return <div className="app">
    <h2>Un profil:</h2>
    <Profile profile={ profile }/>

    <h2>Book list:</h2>
    <BookList />
  </div>;
}

export default App
