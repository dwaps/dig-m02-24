import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './HeaderNavigation.css';

import Homepage from "../../pages/HomePage";
import BookListPage from "../../pages/BookListPage";
import BookPage from "../../pages/BookPage";
import NotFound from "../../pages/NotFound";
import Contact from "../../pages/Contact";

const HeaderNav = () => (
  <ul>
    <li>
      <Link to="/">Homepage</Link>
    </li>
    <li>
      <Link to="/booklistpage">Book List</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
);


function HeaderNavigation () {
  return <div className="HeaderNavigation">
    <Router>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booklistpage" element={<BookListPage />} />
        <Route path="/bookpage/:id" element={<BookPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router> 
  </div>
};


export default HeaderNavigation;
