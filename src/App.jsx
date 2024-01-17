import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import BookDetailsPage from "./pages/BookDetailsPage/BookDetailsPage";
import BooksPage from "./pages/BooksPage/BooksPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import { BooksProvider } from "./utils/context";

function App() {
  return (
    <div className="app">
      <Router>
        <BooksProvider>
          <Header />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/books/:id" element={<BookDetailsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </BooksProvider>
      </Router>
    </div>
  );
}

export default App;
