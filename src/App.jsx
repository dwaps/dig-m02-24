import "./App.css";
import BookPage from "./pages/BookPage/BookPage"
import BookDetailsPage from "./pages/BookDetailsPage/BookDetailsPage";
import Accueil from './pages/Accueil/Accueil'
import Contact from './pages/Contact/Contact'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation";
import BookListProvider from './utils/context/index'
import BookForm from "./components/BookForm/BookForm";

function App() {

  return (
    <div className="app">
      <Router>
        <BookListProvider>
          <HeaderNavigation></HeaderNavigation>
          <Routes>
            <Route path="/livres" element={<BookPage/>} />
            <Route path="/accueil" element={<Accueil/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/livre/:id" element={<BookDetailsPage/>} />
            <Route path="/edit/:id" element={<BookForm isEditing={true}/>} />
            <Route path="/create" element={<BookForm isEditing={false}/>} />
            <Route path="*" element={<Navigate to="/accueil" />} />
          </Routes>
        </BookListProvider>
      </Router>
    </div>
  );
}

export default App;
