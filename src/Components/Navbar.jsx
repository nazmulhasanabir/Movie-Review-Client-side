import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="navbar bg-red-300  text-black   dark:bg-gradient-to-br from-purple-900 via-black to-black dark:text-white">
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
                {user && user?.email ? (
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
                ) : (
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
                )}
              </ul>
            )}
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <img
              className="w-12 rounded-full h-12"
              src="https://i.pinimg.com/736x/73/bc/7e/73bc7ec40362947e3565c37b6af4d7f1.jpg"
              alt="Logo"
            />
            <a className="btn btn-ghost text-xl ">MovieNest</a>
          </div>
        </div>

        <div className="hidden lg:flex w-full justify-center items-center">
          {user && user?.email ? (
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
          ) : (
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
          )}
        </div>

        {/* Dark Mode and User Options */}
        <div className="navbar-end flex items-center gap-4">
        <label className="grid cursor-pointer place-items-center">
            <input
              onClick={darkModeHandler}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            {dark ? "Dark Mode" : "Light Mode"}
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100  fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="" className=" relative m-1">
             {user && user?.email ?
          <div className="group relative w-12 h-12">
               <img className="w-12 h-12 rounded-full"
              src={user.photoURL} />
              <div className="absolute right-0 top-14 hidden w-max px-2 py-1  text-sm text-white bg-gray-800 rounded-md group-hover:block">
                {user.displayName}
              </div>
          </div> 
          :  <Link to={"/signIn"}>
              <button className="btn">Login</button>
            </Link> }
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-[url('https://i.pinimg.com/474x/70/76/74/707674868b11a1d4cdb92e681b37b279.jpg')] bg-cover rounded-box z-[10] w-32 p-2 shadow"
            >
             
               {user && user?.email ? (
            <div className="flex items-center  flex-col">
              <img
                className="w-9 h-9 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <p className="text-white   lg:block">{user.displayName}</p>
             
              
              <button
                onClick={handleLogout}
                className="dark:bg-red-600 bg-purple-400 p-1  rounded-xl text-white "
              >
                Log-out
              </button>
            </div>
          ) : (
            <Link to={"/signIn"}>
              <button className="btn">Login</button>
            </Link>
          )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
