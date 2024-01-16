import Books from "./components/book/books";
import { BookContextProvider } from "./components/hooks/useBook";
import Profil from "./components/profil/profil";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <div>
        {/*<Profil /> */}
        <BookContextProvider>
          <Books />
        </BookContextProvider>
      </div>
    </>
  );
}

export default App;
