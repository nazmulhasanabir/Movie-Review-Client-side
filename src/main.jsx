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
import Users from "./Components/users/Users";
import PrivateRoutes from "./Components/Private route/PrivateRoute";
import Fvrt from "./Fvrt";
import Reset from "./Components/Reset";
import Auth from "./Auth";
import Update from "./Components/Update";
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("http://localhost:5000/addedMovie"),
  },
    
  ,{
    path: "/favorite",
    element:<PrivateRoutes>
      <Fvrt></Fvrt>
      </PrivateRoutes>,
  },
  {
    path: "/addedMovie/:id",
    element:(<PrivateRoutes> <Details></Details></PrivateRoutes>),
    loader: ({ params }) =>
      fetch(`http://localhost:5000/addedMovie/${params.id}`),
  },
  {
    path: "/updateMovie/:id",
    element:<PrivateRoutes><Update></Update></PrivateRoutes>,  
    loader: ({ params }) =>
      fetch(`http://localhost:5000/addedMovie/${params.id}`)
        .then((res) => res.json())
        .catch((error) => console.error("Error fetching movie:", error)),
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
   { path: "/auth",
    element: <Auth></Auth>,
    children:[
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },

    ]
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
    element:<Error></Error>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
