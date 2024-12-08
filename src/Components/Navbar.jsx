import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    if (!dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.error("Logout error:", error.message);
      });
  };

  const navigationLinks = (
    <>
      <NavLink to={"/"}>
        <li className="btn mx-2">Home</li>
      </NavLink>
      <Link to={"/allMovie"}>
        <li className="btn mx-2">All Movies</li>
      </Link>
      <Link to={"/about"}>
        <li className="btn mx-2">About</li>
      </Link>
    </>
  );

  return (
    <div>
      <div className="navbar  bg-white dark:bg-gradient-to-br from-purple-900 via-black to-black dark:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              className="btn btn-ghost lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {menuOpen && (
              <ul
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                onClick={() => setMenuOpen(false)}
              >
                {
          user && user?.email ? 
          <div>
             <Link to={"/"}>
            <li className="btn mx-2">Home</li>
          </Link>
          <Link to={"/allMovie"}>
            <li className="btn mx-2">All Movies</li>
          </Link>
          <Link to={"/about"}>
            <li className="btn mx-2">About</li>
          </Link>
            <Link to={"/addedMovie"}>
          <li className="btn mx-2">Add Movies</li>
        </Link>
        <Link to={"/favourite"}>
          <li className="btn mx-2">My Favorites</li>
        </Link>
          </div>
          :
           <div>
          <Link to={"/"}>
            <li className="btn mx-2">Home</li>
          </Link>
          <Link to={"/allMovie"}>
            <li className="btn mx-2">All Movies</li>
          </Link>
          <Link to={"/about"}>
            <li className="btn mx-2">About</li>
          </Link>
          </div>
         }
              </ul>
            )}
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <img
              className="w-12"
              src="https://img.icons8.com/?size=100&id=UGXkf293eF7t&format=png&color=FFFFFF"
              alt="Logo"
            />
            <a className="btn btn-ghost text-xl">MovieNest</a>
          </div>
        </div>
      
        <div className="hidden lg:flex w-full justify-center items-center">
         {
          user && user?.email ? 
          <div>
             <Link to={"/"}>
            <li className="btn mx-2">Home</li>
          </Link>
          <Link to={"/allMovie"}>
            <li className="btn mx-2">All Movies</li>
          </Link>
          <Link to={"/about"}>
            <li className="btn mx-2">About</li>
          </Link>
            <Link to={"/addedMovie"}>
          <li className="btn mx-2">Add Movies</li>
        </Link>
        <Link to={"/favourite"}>
          <li className="btn mx-2">My Favorites</li>
        </Link>
          </div>
          :
           <div>
          <Link to={"/"}>
            <li className="btn mx-2">Home</li>
          </Link>
          <Link to={"/allMovie"}>
            <li className="btn mx-2">All Movies</li>
          </Link>
          <Link to={"/about"}>
            <li className="btn mx-2">About</li>
          </Link>
          </div>
         }
        </div>

        {/* Dark Mode and User Options */}
        <div className="navbar-end flex items-center gap-4">
          <button
            onClick={darkModeHandler}
            className={`btn ${
              dark ? "bg-purple-700" : "bg-red-700"
            } text-white`}
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
          {user && user?.email ? (
            <div className="flex items-center gap-3">
              <img
                className="w-9 h-9 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <p className="text-white hidden lg:block">{user.displayName}</p>
              <button
                onClick={handleLogout}
                className="bg-red-600 p-2 rounded-3xl text-white"
              >
                Log-out
              </button>
            </div>
          ) : (
            <Link to={"/signIn"}>
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
