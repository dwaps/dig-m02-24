import "./App.css";

import BookPageDetails from "./components/book-components/BookPageDetails";
import MainContent from "./components/MainContent";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/book-details/:id" element={<BookPageDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
