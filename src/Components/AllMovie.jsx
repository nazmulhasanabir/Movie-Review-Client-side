import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import Footer from "./Footer";

const AllMovie = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const movies = useLoaderData();
  const [Mov, setMov] = useState(movies)

  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/addedMovie?searchParams=${search}`)
      .then((res) => res.json())
      .then(
        (data) => {
         setMov(data)
        },
        [search]
      );
  });
  //  const { _id,posterUrl, title, release, duration, genre, rating } = movies;
  return (
    <div className=" bg-orange-200  dark:bg-gradient-to-br from-purple-900 via-black to-black">
      <Navbar></Navbar>
      <div className="w-6/12 mx-auto p-3 ">
        <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-2 w-10/12 mx-auto">
        {Mov.map((movie) => (
          <div className=" herobg-gradient-to-br from-purple-900 via-black to-black dark:text-white min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={movie.posterUrl}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">{movie.title} </h1>
                <div>
                  {" "}
                  <p className="text-xl ">
                    {movie.genre} ({movie.release}){" "}
                  </p>
                </div>
                <p className="py-6">{movie.summary}</p>
                {user && user?.email ? (
                  <Link to={`/addedMovie/${movie._id}`}>
                    <button className="btn btn-primary">See Details</button>
                  </Link>
                ) : (
                  <Link to={"/signIn"}>
                    <button className="btn btn-primary">See Details</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllMovie;
