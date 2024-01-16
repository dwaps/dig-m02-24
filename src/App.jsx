
import './App.css'
import { useState, createContext, useContext } from 'react';

import HeaderNavigation from './components/HeaderNavigation/HeaderNavigation';
import { bookList } from './models/index'

export const BookListContext = createContext() 

function App() {

  const [books, setBook] = useState("")



  return ( 
    <>
    <div className="app">
      <BookListContext.Provider value={bookList}>

        <HeaderNavigation />

      </BookListContext.Provider>
    </div>
    </>
)}

export default App
