import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import About from "../Pages/About";
import Blog from "../Pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Wrap MainLayout in JSX
    children: [
      {
        path: "/", // Route to home
        element: <Home />, // Render Home component
      },
      {
        path: "/Details/:id", // Route to home
        element: <Details></Details>, // Render Home component
      },
      {
        path: "/about", // Route to home
        element: <About />, // Render Home component
      },
      {
        path: "/blog", // Route to home
        element: <Blog />, // Render Home component
      },
    ],
  },
]);
