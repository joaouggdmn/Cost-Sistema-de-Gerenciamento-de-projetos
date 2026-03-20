import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Company from "./components/pages/Company.jsx";
import Contact from "./components/pages/Contact.jsx";
import NewProject from "./components/pages/NewProject.jsx";
import Container from "./components/layout/Container.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Projects from "./components/pages/Projects.jsx";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <Navbar />
      </header>

      <main className="flex-1">
        <Container>
          <Outlet />
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "home", element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "company", element: <Company /> },
      { path: "contact", element: <Contact /> },
      { path: "new-project", element: <NewProject /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
