import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./style.css"
import "./index.css"

import App from "./App.jsx"
import About from "./components/pages/About"
import Projects from "./components/pages/Projects"
import Contact from "./components/pages/Contact"
import Resume from "./components/pages/Resume";

// Create a router using createBrowserRouter from React Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The root route points to the App component
    children: [
      {
        index: true,
        element: <About />, // Child route: About component
      },
      {
        path: "/projects",
        element: <Projects />, // Child route: Projects component
      },
      {
        path: "/contact",
        element: <Contact />, // Child route: Contact component
      },
      {
        path: "/resume",
        element: <Resume />, // Child route: Resume component
      },
    ],
  },
]);

// Render the RouterProvider component to set up routing
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);
