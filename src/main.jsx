import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"; 
import Home from "./components/pages/Home.jsx";
import Company from "./components/pages/Company.jsx";
import Contact from "./components/pages/Contact.jsx";
import NewProject from "./components/pages/NewProject.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/company",
    element: <Company />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/new-project",
    element: <NewProject />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/new-project">New Project</Link>
      </nav>
    </div>
    <RouterProvider router={router} />
  </StrictMode>,
);
