import "./App.css";

import BookPageDetails from "./components/book-components/BookPageDetails";
import BookUpdate from "./components/book-components/BookUpdate";
import MainContent from "./components/MainContent";
import { BookProvider } from "./utils/context";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/book-details/:id" element={<BookPageDetails />} />
          <Route
            path="/book-upd/:id"
            element={
              <BookProvider>
                <BookUpdate />
              </BookProvider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
