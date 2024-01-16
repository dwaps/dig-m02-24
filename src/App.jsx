import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
} from "react-router-dom";
import "./App.css";

const HeaderNav = () => (
  <ul>
    <li>
      <Link to="/one">One</Link>
    </li>
    <li>
      <Link to={"/two/678"}>Two</Link>
    </li>
    <li>
      <Link to="/three">Three</Link>
    </li>
  </ul>
);

const One = () => <h1>Page One</h1>;
const Two = () => {
  const { id } = useParams();
  return <h1>Page Two: id réçu ➡️ {id}</h1>;
};
const Three = () => <h1>Page Three</h1>;

function App() {
  return (
    <div className="app">
      <Router>
        <HeaderNav />
        <Routes>
          <Route path="/one" element={<One />} />
          <Route path="/two/:id" element={<Two />} />
          <Route path="/three" element={<Three />} />
          <Route path="*" element={<Navigate to="/one" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
