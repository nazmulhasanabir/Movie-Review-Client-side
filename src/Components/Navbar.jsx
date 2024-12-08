import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
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
  const link = (
    <>
      <NavLink to={"/"}>
        <li className="btn mx-2">Home</li>
      </NavLink>
      <Link to={"/about"}>
        <li className="btn mx-2">About</li>
      </Link>
      <Link to={"/allMovie"}>
        <li className="btn mx-2">All Movies</li>
      </Link>
      <Link to={"/addedMovie"}>
        <li className="btn mx-2">Add Movies</li>
      </Link>
      <Link to={"/fvrtMovie"}>
        <li className="btn mx-2">My Favorites</li>
      </Link>
    </>
  );
  return (
    <div>
      <div className="navbar bg-gradient-to-br from-purple-900 via-black to-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/* vvv */}
            </ul>
          </div>
          <div className="flex items-center">
            <img
              className="w-12"
              src="https://img.icons8.com/?size=100&id=UGXkf293eF7t&format=png&color=FFFFFF"
            />
            <a className="btn btn-ghost text-xl">MovieNest</a>
          </div>
        </div>
        {user && user?.email ? (
          <div className="flex items-center justify-center gap-5 w-full mx-auto">
            {link}
            <img className="w-9 h-9 mx-2" src={user.photoUrl} alt="" />
            <p className="text-white">{user.name}</p>
            <button
              onClick={handleLogout}
              className=" bg-red-600 p-2 rounded-3xl text-white"
            >
              Log-out
            </button>
          </div>  
        ) : (
          <>
            <div className="flex items-center justify-center gap-5 w-full mx-auto">
              {" "}
              <NavLink to={"/"}>
                <li className="btn mx-2">Home</li>
              </NavLink>
              <Link to={"/about"}>
                <li className="btn mx-2">About</li>
              </Link>
              <Link to={"/allMovie"}>
                <li className="btn mx-2">All Movies</li>
              </Link>
            </div>
            <div className="navbar-end">
              <img
                className="w-9 h-9 mx-2"
                src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                alt=""
              />
              <Link to={"/signIn"}>
                <a className="btn">Login</a>
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="bg-yellow-100 dark:bg-blue-900"></div>
    </div>
  );
};

export default Navbar;
