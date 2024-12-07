import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";

import AddMovie from "./Components/Private route/AddMovie";
import AllMovie from "./Components/AllMovie";
import About from "./Components/About";
import Details from "./Components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("http://localhost:5000/addedMovie"),
    
  },
  {
    path:"/addedMovie/:id",
    element:<Details></Details>,
    loader: ({params}) => fetch(`http://localhost:5000/addedMovie/${params.id}`),
  },
  {
    path: "/allMovie",
    element: <AllMovie></AllMovie>,
    loader: () => fetch("http://localhost:5000/addedMovie"),
  },
  {
    path: "/addedMovie",
    element: <AddMovie></AddMovie>,
    
  },
  {
    path: "/about",
    element: <About></About>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
