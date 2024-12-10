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
import SignIn from "./Components/Verfication/SignIn";
import SignUp from "./Components/Verfication/SignUp";
import AuthProvider from "./Components/Provider/AuthProvider";
import Navbar from "./Components/Navbar";
import Users from "./Components/users/Users";
import Error from "./Components/404/Error";
import PrivateRoutes from "./Components/Private route/PrivateRoute";
import Fvrt from "./Fvrt";
import Reset from "./Components/Reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("http://localhost:5000/addedMovie"),
  },
  {
    path: "/addedMovie/:id",
    element: <Details></Details>,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/addedMovie/${params.id}`),
  },
  {
    path: "/allMovie",
    element: <AllMovie></AllMovie>,
    loader: () => fetch("http://localhost:5000/addedMovie"),
  },
  {
    path: "/addedMovie",
    element: <PrivateRoutes> <AddMovie></AddMovie> </PrivateRoutes>,
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/favourite",
    element:<Fvrt></Fvrt>
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path:"/reset",
    element:<Reset></Reset>
  },
  {
    path: "users",
    element: <Users></Users>,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
