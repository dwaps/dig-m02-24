import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/app.scss";

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profil from "./components/profil/profil.jsx";
import BookDetailsPage from "./components/book/page/BookDetailsPage.jsx";
import HomePage from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/panier",
    element: <HomePage />,
  },
  {
    path: "/book-details",
    element: <BookDetailsPage />,
  },
  {
    path: "/profil",
    element: <Profil />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
