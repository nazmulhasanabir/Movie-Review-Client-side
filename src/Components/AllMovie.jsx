import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import Footer from "./Footer";
import RatingReview from "./Private route/Rating";

const AllMovie = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const movies = useLoaderData();
  const [Mov, setMov] = useState(movies);
  const [search, setSearch] = useState("");

  
    useEffect(() => {
    fetch(`https://assignment-server-side-eight.vercel.app/addedMovie?searchParams=${search}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setMov(data);
        },
        [search]
      );
  
  });

  //  const { _id,posterUrl, title, release, duration, genre, rating } = movies;
  return (
    <div className="  bg-gradient-to-br from-purple-900 via-black to-black   dark:bg-gradient-to-br dark:from-sky-300- dark:via-sky-300 dark:to-sky-300 dark:text-black">
      <Navbar></Navbar>
      <div className="w-6/12 mx-auto p-1 ">
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
      <div>
      <div className="grid grid-cols-1  gap-2 lg:grid-cols-2 lg:gap-5 w-8/12 mx-auto">
        {Mov.map((movie) => (
          <div>
            <div className="  text-white rounded-2xl p-1 dark:bg-gradient-to-br dark:from-white dark:via-sky-300 dark:to-white dark:text-black ">
            <div className="flex-col lg:flex-row w-10/12 mx-auto">
            <img
              src={movie.posterUrl}
              className=" w-8/12 mx-auto rounded-lg shadow-2xl"
            />
              <div>
                <h1 className="text-5xl text-center font-bold">{movie.title} </h1>
                <div>
                  <p className="text-xl  text-center">
                    {movie.genre} ({movie.release})
                  </p>
                  <p className="text-center">
              <RatingReview rating={movie.rating}></RatingReview>
            </p>
                </div>
                <p className="py-2 text-center">{movie.summary}</p>
                {user && user?.email ? (
                  <div className="w-3/12 mx-auto" >
                    <Link to={`/addedMovie/${movie._id}`}>
                    <button className="btn btn-primary ">See Details</button>
                  </Link>
                  </div>
                ) : (
                    <div className="w-3/12 mx-auto">
                         <Link to={"/auth/signIn"}>
                    <button className="btn btn-primary ">See Details</button>
                  </Link>
                    </div>
                )}
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
      </div>
      <div className="text-white">
      <Footer></Footer>
      </div>
    </div>
  );
};

export default AllMovie;
